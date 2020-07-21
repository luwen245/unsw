<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use app\common\library\Email;

/**
 * 会员管理
 *
 * @icon fa fa-circle-o
 */
class Member extends Backend
{
    
    /**
     * Member模型对象
     * @var \app\admin\model\Member
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Member;
        $this->view->assign("statusList", $this->model->getStatusList());
    }
    
    public function check($ids=null)
    {
       $member = $this->model->find($ids);
       $this->assign('row',$member);
       return $this->view->fetch();
    }
    //审核通过 发送邮件
    public function pass()
    {
      $res = $this->model->where('id',$this->request->get('id'))->update([
          'status'=>1
      ]);
      if($res){
          $member = $this->model->find($this->request->get('id'));
          $receiver = $member['email'];
          //邮件发送
          $email = new Email();
          $result = $email
              ->from('system@militech.top','UNSW')
              ->to($receiver)
              ->subject('Welcome to UNSW/Global Digital Agent Hub')
              ->message('Your registration has been verified. Please jump into www. agenthub.unsw.edu.au to log in and find the most up to date information.')
              ->send();
          if ($result) {
              $this->success();
          } else {
              $this->error($email->getError());
          }
      }else{
          $this->error();
      }
    }
    //审核失败
    public function failed()
    {
        $res = $this->model->where('id',$this->request->get('id'))->update([
            'status'=>2
        ]);
        if($res){
            $member = $this->model->find($this->request->get('id'));
            $receiver = $member['email'];
            //邮件发送
            $email = new Email();
            $result = $email
                ->from('system@militech.top','UNSW')
                ->to($receiver)
                ->subject('Your registration is failed')
                ->message('Sorry, you fail to pass the registration verification.')
                ->send();
            if ($result) {
                $this->success();
            } else {
                $this->error($email->getError());
            }
        }else{
            $this->error();
        }
    }

}
