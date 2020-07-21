<?php

namespace app\admin\model;

use think\Model;


class Video extends Model
{

    

    

    // 表名
    protected $name = 'video';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'publishtime_text'
    ];
    

    



    public function getPublishtimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['publishtime']) ? $data['publishtime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setPublishtimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}
