<?php

namespace app\api\controller;

use app\common\controller\Api;
use app\common\library\Email;
use app\common\library\Ems;
use app\common\library\Sms;
use fast\Random;
use PhpOffice\PhpSpreadsheet\Reader\Xls\MD5;
use think\Validate;

/**
 * 会员接口
 */
class Member extends Base
{
    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Member();
    }
    /**
     * 登录
     *
     * @ApiTitle    (登录接口)
     * @ApiSummary
     * @ApiMethod   (POST)
     *
     * @param string $email  邮箱
     * @param string $password 密码
     * @param string $language   language
     */
    public function login()
    {
        $param = $this->request->param();
        $validate = new Validate([
            'email' => 'require|email',
            'password' => 'require',
        ]);
        $validate->message([
            'email.require' => $this->language['Please enter email'],
            'email.email' => $this->language['Email is invalid'],
            'password.require' => $this->language['Please enter password'],
        ]);
        if (!$validate->check($param)) {
            $this->error($validate->getError());
        }
        //登录操作
        $member = $this->model->where(['email'=>$param['email']])->find();
        if(!$member){
            $this->error($this->language['This email does not exist']);
        }
        if(MD5($param['password'].$member['salt']) != $member['password']){
            $this->error($this->language['Please enter the correct password']);
        }
        //更新token
        $token = Random::uuid();
        \app\common\library\Token::set($token,$member['id'], 25920000);
        $tokenInfo = \app\common\library\Token::get($token);
        $this->success($this->language['Login successful'],[
            'userInfo'=>$member,
            'token'=>$tokenInfo['token']
        ]);
    }

    /**
     * 注册会员
     * @ApiTitle    (会员登录)
     * @ApiMethod   (POST)
     * @ApiSummary  (会员状态  审核过程 审核通过)
     *
     * @param string $full_name 全名称
     * @param string $email 邮箱
     * @param string $country 国家
     * @param string $company_name  公司
     * @param string $password 密码
     * @param string $password_confirm 确认密码
     * @param string $language   language
     */
    public function register()
    {
        $param = $this->request->param();
        $validate = new Validate([
            'full_name' => 'require',
            'email' => 'require|email',
            'password' => 'require|confirm',
            'password_confirm' => 'require',
            'country'     => 'require',
            'company_name'   => 'require',
        ]);
        $validate->message([
            'full_name.require' => $this->language['Please enter the full name'],
            'email.require' => $this->language['Please enter email'],
            'email.email' => $this->language['Email is invalid'],
            'password.require' => $this->language['Please enter password'],
            'password_confirm.require' => $this->language['Please enter confirmed password'],
            'password.confirm' => $this->language['Password and confirmed password not matched'],
            'country.require' => $this->language['Please enter country'],
            'company_name.require' => $this->language['Please enter company'],
        ]);
        if (!$validate->check($param)) {
            $this->error($validate->getError());
        }
        $member = $this->model->where('email',$this->request->post('email'))->find();
        if($member){
            $this->error($this->language['The Email has been registered']);
        }
        $salt = Random::uuid();
        $res = $this->model->insert([
            'full_name'=>$param['full_name'],
            'email'=>$param['email'],
            'country'=>$param['country'],
            'company_name'=>$param['company_name'],
            'password'=>MD5($param['password'].$salt),
            'salt'=>$salt,
            'ip'=>$this->request->ip(),
            'createtime'=>time(),
            'status'=>0
        ]);
        if($res){
            $this->success($this->language['Registration completed']);
        }else{
            $this->success($this->language['Registration failed']);
        }
    }

    /**
     * 注册登出
     * @ApiTitle    (注册登出)
     *
     * @param string token token
     * @param string $language   language
     */
    public function logout()
    {
        $token = $this->request->header('token');
        \app\common\library\Token::delete($token);
        $this->success($this->language['Logout successfully']);
    }

    /**
     * Send Email
     * @ApiTitle    (忘记密码)
     * @ApiMethod   (POST)
     * @ApiSummary  (邮件发送邮件)
     *
     * @param string $token token
     * @param string $email 邮箱
     * @param string $language   language
     */
    public function sendEmail()
    {
        $param = $this->request->param();
        $validate = new Validate([
            'email' => 'require|email'
        ]);
        $validate->message([
            'email.require' => $this->language['Please enter email'],
            'email.email' => $this->language['Email is invalid'],
        ]);
        if (!$validate->check($param)) {
            $this->error($validate->getError());
        }
        //邮箱
        $member = $this->model->where('email',$param['email'])->find();
        if(!$member){
            $this->error($this->language['This email does not exist']);
        }
        $email = new Email();
        //更新token
        $token = Random::uuid();
        \app\common\library\Token::set($token,$member['id'], 25920000);
        $tokenInfo = \app\common\library\Token::get($token);
        $str = 'https://unsw.militech.top/#/resetPassword?token='.$tokenInfo['token'].'&language='.$this->request->post('language');
        $email->to($param['email'])->subject('Notice')->message($str)->send();
        $email->from('system@militech.top','UNSW')
            ->to($param['email'])
            ->subject('Reset your password')
            ->message('Please click below link to reset your password.'.$str)
            ->send();
        $this->success($this->language['Sent successfully']);
    }

    /**
     * 修改密码
     * @ApiTitle    (修改密码)
     * @ApiSummary  (重置密码)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $password 新密码
     * @param string $password_confirm  确认密码
     * @param string $language   language
     */
    public function changepwd()
    {
        $param = $this->request->param();
        $validate = new Validate([
            'password' => 'require|confirm',
            'password_confirm' => 'require'
        ]);
        $validate->message([
            'password.require' => $this->language['Please enter password'],
            'password.confirm' => $this->language['Password and confirmed password not matched'],
            'password_confirm.require' => $this->language['Please enter confirmed password'],
        ]);
        if (!$validate->check($param)) {
            $this->error($validate->getError());
        }
        $token = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        if($tokenInfo){
            $salt = Random::uuid();
            $this->model->where('id',$tokenInfo['user_id'])->update([
                'salt'=>$salt,
                'password'=>MD5($param['password'].$salt)
            ]);
            $this->success($this->language['Password is reset']);
        }else{
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
    }

    /**
     * 重置密码 Reset Password
     * @ApiTitle    (重置密码)
     * @ApiSummary  (重置密码)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $newpassword 新密码
     * @param string $confirm_password  确认密码
     * @param string $language   language
     */
    public function resetpwd()
    {
        $param = $this->request->param();
        $validate = new Validate([
            'password' => 'require|confirm',
            'password_confirm' => 'require'
        ]);
        $validate->message([
            'password.require' => $this->language['Please enter password'],
            'password.confirm' => $this->language['Password and confirmed password not matched'],
            'password_confirm.require' => $this->language['Please enter confirmed password'],
        ]);
        if (!$validate->check($param)) {
            $this->error($validate->getError());
        }
        $token = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        if($tokenInfo){
            $salt = Random::uuid();
            $this->model->where('id',$tokenInfo['user_id'])->update([
                'salt'=>$salt,
                'password'=>MD5($param['password'].$salt)
            ]);
            $this->success($this->language['Password is reset']);
        }else{
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
    }

    /**
     * 关注记录
     * @ApiTitle    (关注记录)
     * @ApiSummary  (重置密码)
     * @ApiMethod   (POST)
     *
     * @param string $token  token
     * @param string $content_id  content_id
     * @param string $language   language
     */
    public function favourites()
    {
        if(!$this->request->post('content_id')){
            $this->error('Content_id Can not be null');
        }
        $token = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        //关注记录
        if($tokenInfo){
            $member_id = $tokenInfo['user_id'];//会员id
            $favorite = model('MemberFavorite')->where([
                'member_id'=>$member_id,
                'content_id'=>$this->request->post('content_id')
            ])->find();
            if(!$favorite){
                model('MemberFavorite')->insert([
                    'member_id'=>$member_id,
                    'content_id'=>$this->request->post('content_id'),
                    'createtime'=>time()
                ]);
                //用户下载次数
                $this->success($this->language['Operation completed']);
            }else{
                $this->error('Already collected');
            }
        }else{
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
    }
    /**
     * 取消关注
     * @ApiTitle    (关注记录)
     * @ApiSummary  (重置密码)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $content_id  content_id
     * @param string $language   language
     */
    public function unfavourites()
    {
        if(!$this->request->post('content_id')){
            $this->error('Content_id Can not be null');
        }
        $token = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        //关注记录
        if($tokenInfo){
            $member_id = $tokenInfo['user_id'];//会员id
            model('MemberFavorite')->where([
                'member_id'=>$member_id,
                'content_id'=>$this->request->post('content_id')
            ])->delete();
            //用户下载次数
            $this->success($this->language['Operation completed']);
        }else{
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
    }

    /**
     * 下载记录
     * @ApiTitle    (下载记录)
     * @ApiSummary  (下载记录)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $content_id  content_id
     * @param string $language   language
     */
    public function downloads()
    {
        $token  = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        if(!$this->request->post('content_id')){
            $this->error('Content_id can not be null');
        }
        $tokenInfo = \app\common\library\Token::get($token);
        if($tokenInfo){
            $member_id = $tokenInfo['user_id'];//会员id
            $download = model('MemberDownload')->where(['member_id'=>$member_id,'content_id'=>$this->request->post('content_id')])->find();
            if($download){
                $download->setInc('times');
            }else{
                model('MemberDownload')->insert([
                    'member_id'=>$member_id,
                    'content_id'=>$this->request->post('content_id'),
                    'createtime'=>time(),
                    'times'=>0
                ]);
            }
            //用户下载次数
            $this->model->where('id',$member_id)->setInc('download_times');
            $this->success($this->language['Operation completed']);
        }else{
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
    }
    /**
     * Country Company
     * @ApiTitle    (国家 组织二级联动)
     * @ApiMethod   (GET)
     */
    public function company()
    {
        $data = model('admin/country')->order('name asc')->with('children')->select();
        $this->success('Success',$data);
    }
    /**
     * 用户关注
     * @ApiTitle    (用户关注)
     * @ApiSummary  (点赞的列表  documents images videos)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $language   language
     */
    public function favor()
    {
        $token  = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        if($tokenInfo){
            $member_id = $tokenInfo['user_id'];//会员id
            $data = model('MemberFavorite')
                ->with('content')
                ->where('member_id',$member_id)
                ->select();
            $data = collection($data)->toArray();
            $arr = [];
            foreach ($data as $key=>$val){
                $val['favorite'] = true;
                if($val['content']){
                    $val['content']['publishtime'] = date('d m Y',$val['content']['publishtime']);
                    if($val['content']['type'] == 'image'){
                        $arr['images'][] = $val;
                    }elseif($val['content']['type'] == 'video'){
                        $arr['videos'][] = $val;
                    }else{
                        $arr['documents'][] = $val;
                    }
                }
            }
            $this->success($this->language['Operation completed'],$arr);
        }else{
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
    }
    /**
     * 用户下载
     * @ApiTitle    (用户下载)
     * @ApiSummary  (下载列表 documents images videos)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $language   language
     * @param string $content_id   内容id
     */
    public function download()
    {
        $token  = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        if($tokenInfo){
            $member_id = $tokenInfo['user_id'];//会员id
            $data = model('MemberDownload')
                ->with('content')
                ->where('member_id',$member_id)
                ->select();
            $arr1 = [];
            foreach ($data as $favorite){
                $arr1[$favorite['content_id']] = true;
            }
            $data = collection($data)->toArray();
            $arr = [];
            foreach ($data as $key=>$val){
                $val['favorite'] = isset($arr1[$val['id']])?true:false;
                if($val['content']){
                    $val['content']['publishtime'] = date('d m Y',$val['content']['publishtime']);
                    if($val['content']['type'] == 'image'){
                        $arr['images'][] = $val;
                    }elseif($val['content']['type'] == 'video'){
                        $arr['videos'][] = $val;
                    }else{
                        $arr['documents'][] = $val;
                    }
                }
            }
            $this->success($this->language['Operation completed'],$arr);
        }else{
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
    }

    /**
     * 团队列表
     * @ApiTitle    (团队列表)
     * @ApiSummary  (团队列表)
     * @ApiMethod   (POST)
     *
     * @param string $token   token
     * @param string $language   language
     */
    public function teams()
    {
        $param = $this->request->param();
        if(!$param['language']){
            $this->error('Language Can not be null');
        }
        $token  = $this->request->header('token');
        if(!$token){
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
        $tokenInfo = \app\common\library\Token::get($token);
        if($tokenInfo){
            $data = model('admin/region')
                ->where('language','IN',['All',$param['language']])
                ->select();
            $this->success($this->language['Operation completed'],$data);
        }else{
            return json(['code'=>2, 'msg'=>$this->language['Please login first'], 'time'=>time()]);
        }
    }
}
