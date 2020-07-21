<?php

namespace app\api\controller;

use think\Validate;

/**
 * cate接口
 */
class Category extends Base
{
    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    /**
     * 获取详情
     * @ApiTitle    (获取详情)
     * @ApiSummary  (获取详情 列表内容  目录详情内容)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $name 目录标题
     * @param string  $language 语种
     * @param string  $page page 从0开始
     * @param string  $pagesize pagesize
     */
    public function detail()
    {
        $param = $this->request->param();
        $page = isset($param['page'])?$param['page']:0;
        $pagesize = isset($param['pagesize'])?$param['pagesize']:5;
        $validate = new Validate([
            'name' => 'require',
            'language' => 'require'
        ]);
        $validate->message([
            'name.require' => 'Name Can not be null',
            'language.require' => 'Language Can not be null'
        ]);
        if (!$validate->check($param)) {
            $this->error($validate->getError());
        }
        $token = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        if(!$tokenInfo){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        //member favorite
        $favorites = model('MemberFavorite')->where('member_id',$tokenInfo['user_id'])->select();
        $arr = [];
        foreach ($favorites as $favorite){
            $arr[$favorite['content_id']] = true;
        }
        $category = model('admin/category')
            ->where('name',$param['name'])
            ->find();
        if(!$category){
            $this->error('Parameter error');
        }
        $language = model('admin/language')->where('code',$param['language'])->find();
        $res = model('admin/trans_category')
            ->where(['category_id'=>$category->id,'language'=>$language['name']])
            ->find();
        $data = [];
        $data['category_id'] = $category->id;
        if($res){
            $data['content'] = $res['content'];
            $data['name'] = $res['name'];
        }else{
            $res = model('admin/trans_category')
                ->where(['category_id'=>$category->id,'language'=>'All'])
                ->find();
            if($res){
                $data['content'] = $res['content'];
                $data['name'] = $res['name'];
            }else{
                $data['content'] = '';
                $data['name'] = '';
            }
        }
        switch ($category['id']){
            case 2://About us
            case 3: //Student Guides and Resources
            case 11://Order Student Guides
            case 12: //Quick Links
            case 19: //System User Guides
                break;
            case 4://Updates and Newsletters
            case 20://Video and Webinar Library
            case 22://Video and Webinar Library
                $list = model('admin/content')
                    ->order('id desc')
                    //->limit($pagesize*$page, $pagesize)
                    ->where('category_id',$category['id'])
                    ->where('language','IN',['All',$language['name']])
                    //  ->limit(5)
                    ->select();
                $list =  collection($list)->toArray();
                foreach ($list as $k=>$val){
                    $list[$k]['publishtime'] = date('d m Y',$val['publishtime']);
                    $list[$k]['favorite'] = isset($arr[$val['id']])?true:false;
                }
                $data1 = [];
                foreach ($list as $key=>$item){
                    $data1[$item['belong']][] = $item;
                }
                $data['list'] = $data1;
                break;
            case 5://Entry Requirements
            case 6://key Dates
            case 9://Agent Manual
            case 13://2021 Student Guides
            case 15://Program Flyers
            case 16://Pull Up Banners
            case 17://Templates
            case 18://Brand Guidelines
            case 21://Images Library
                $data['list'] = model('admin/content')
                    ->order('id desc')
                    ->limit($pagesize*$page, $pagesize)
                    ->where('category_id',$category['id'])
                    ->where('language','IN',['All',$language['name']])
                    ->select();
                $data['list'] = collection($data['list'])->toArray();
                foreach ($data['list'] as $key=>$val){
                    $data['list'][$key]['publishtime'] = date('d m Y',$val['publishtime']);
                    $data['list'][$key]['favorite'] = isset($arr[$val['id']])?true:false;
                }
                break;
            case 7://Upcoming Events 时间处理
                $data['list'] = model('admin/content')
                    ->order('id desc')
                    ->limit($pagesize*$page, $pagesize)
                    ->where('category_id',$category['id'])
                    ->where('language','IN',['All',$language['name']])
                    ->select();
                $data['list'] = collection($data['list'])->toArray();
                foreach ($data['list'] as $key=>$val){
                    $data['list'][$key]['month'] = date('M',$val['publishtime']);
                    $data['list'][$key]['day'] = date('d',$val['publishtime']);
                    $data['list'][$key]['week'] =date("l",$val['publishtime']);
                    $data['list'][$key]['favorite'] = isset($arr[$val['id']])?true:false;
                }
                break;
            case 8://Scholarships
                $data['list'] = model('admin/content')
                    ->order('id desc')
                    ->limit($pagesize*$page, $pagesize)
                    ->where('category_id',$category['id'])
                    ->where('language','IN',['All',$language['name']])
                    ->select();
                $data['list'] = collection($data['list'])->toArray();
                foreach ($data['list'] as $key=>$val){
                    $data['list'][$key]['publishtime'] = date('d M Y',$val['publishtime']);
                    $data['list'][$key]['favorite'] = isset($arr[$val['id']])?true:false;
                }
                break;
            case 10://Meet Our Team
                $where = [];
                if($this->request->post('region_id')){
                    $where['id'] = $this->request->post('region_id');
                }
                $data['list'] = model('admin/region')
                    ->order(['weigh','id'=>'desc'])
                    ->with('teams')
                    ->where('language','IN',['All',$language['name']])
                    ->where($where)
                    ->select();
                break;
            default:
                break;
        }
        $this->success($this->language['Operation completed'],$data);
    }

    /**
     * 详情页列表
     * @ApiTitle    (详情页列表)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $title 目录标题
     * @param string  $language 语种
     * @param string  $page page 从0开始
     * @param string  $pagesize pagesize
     */
    public function sub()
    {
        $param = $this->request->param();
        $validate = new Validate([
            'title'=>'require',
            'language'=>'require'
        ]);
        $validate->message([
            'title.require' => 'Title Can not be null',
            'language.require' => 'Language Can not be null',
        ]);
        if (!$validate->check($param)) {
            $this->error($validate->getError());
        }
        $language = model('admin/language')->where('code',$param['language'])->find();
        $token = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        if(!$tokenInfo){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $page = isset($param['page'])?$param['page']:0;
        $pagesize = isset($param['pagesize'])?$param['pagesize']:5;
        $data['list'] = model('admin/content')
            ->order('id desc')
            ->limit($pagesize*$page, $pagesize)
            ->where(['belong'=>$param['title']])
            ->where('language','IN',['All',$language['name']])
            ->select();
        $favorites = model('MemberFavorite')->where('member_id',$tokenInfo['user_id'])->select();
        $arr = [];
        foreach ($favorites as $favorite){
            $arr[$favorite['content_id']] = true;
        }
        $data['list'] = collection($data['list'])->toArray();
        foreach ($data['list'] as $key=>$val){
            $data['list'][$key]['publishtime'] = date('d M Y',$val['publishtime']);
            $data['list'][$key]['favorite'] = isset($arr[$val['id']])?true:false;
        }
        $this->success('success',$data);
    }


}
