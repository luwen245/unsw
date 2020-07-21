<?php

namespace app\admin\model;

use think\Model;


class TransCategory extends Model
{
    // 表名
    protected $name = 'trans_category';
    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [];

}
