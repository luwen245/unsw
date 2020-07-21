<?php

namespace app\admin\model;

use think\Model;


class Member extends Model
{
    // 表名
    protected $name = 'member';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'login_time_text',
        'status_text'
    ];

    public function getStatusList()
    {
        return ['0' => 'Check', '1' => 'Pass', '2' => 'Failed'];
    }

    public function getLoginTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['login_time']) ? $data['login_time'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }

    protected function setLoginTimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }
}
