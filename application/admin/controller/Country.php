<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use think\Db;

/**
 * 国家管理
 *
 * @icon fa fa-circle-o
 */
class Country extends Backend
{
    
    /**
     * Country模型对象
     * @var \app\admin\model\Country
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Country;

    }


}
