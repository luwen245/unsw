<?php

namespace app\admin\model;

use think\Model;


class Question extends Model
{
    // 表名
    protected $name = 'question';
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;
    // 追加属性
    protected $append = [];

    public function language()
    {
        return $this->hasOne(Language::class,'id','language_id');
    }
}
