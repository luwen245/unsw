<?php

namespace app\api\controller;

use app\common\controller\Api;
use think\Db;
use think\Validate;

/**
 * 首页接口
 */
class Index extends Base
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    /**
     * 首页搜索功能
     * @ApiTitle    (首页搜索)
     * @ApiSummary  (首页搜索)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $title  title
     * @param string $language   language
     * @param string  $page page 从0开始
     * @param string  $pagesize pagesize
     */
    public function search()
    {
        $param = $this->request->param();
        $page = isset($param['page'])?$param['page']:0;
        $pagesize = isset($param['pagesize'])?$param['pagesize']:10;
        $validate = new Validate([
            'title' => 'require',
            'language' => 'require'
        ]);
        $validate->message([
            'title.require' => $this->language['Please enter search keywords'],
            'language.require' => 'Language Can not be null',
        ]);
        if (!$validate->check($param)) {
            $this->error($validate->getError());
        }
        $token  = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        if($tokenInfo){
            $favorites = model('MemberFavorite')->where('member_id',$tokenInfo['user_id'])->select();
            $arr = [];
            foreach ($favorites as $favorite) {
                $arr[$favorite['content_id']] = true;
            }
                $data['list'] = model('admin/content')
                ->order('id desc')
                ->where('title','Like','%'.$this->request->post('title').'%')
                ->where('language','IN',['All',$param['language']])
                ->limit($pagesize*$page, $pagesize)
                ->select();
            $data['list'] = collection($data['list'])->toArray();
            foreach ($data['list'] as $key=>$val){
                $data['list'][$key]['publishtime'] = date('d m Y',$val['publishtime']);
                $data['list'][$key]['favorite'] = isset($arr[$val['id']])?true:false;
            }
            $this->success($this->language['Operation completed'],$data);
        }else{
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
    }
}
