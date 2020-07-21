<?php

namespace app\admin\model;

use think\Model;


class Content extends Model
{

    

    

    // 表名
    protected $name = 'content';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'type_text',
        'Publishtime_text'
    ];
    

    
    public function getTypeList()
    {
        return ['Type:Images' => __('images'), 'Video' => __('video'), 'Document' => __('document'), 'Content' => __('content')];
    }


    public function getTypeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['type']) ? $data['type'] : '');
        $list = $this->getTypeList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getPublishtimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['Publishtime']) ? $data['Publishtime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setPublishtimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}
