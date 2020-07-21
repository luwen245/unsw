<?php

namespace app\index\controller;

use app\common\controller\Frontend;
use think\Db;

class Index extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function index()
    {
        if(!isMobile()){
            return $this->view->fetch(':index');
        }else{
            return $this->view->fetch(':mobile');
        }
    }
}
