<?php

namespace app\common\model;

use think\Model;
use app\admin\model\Content;
/**
 * 分类模型
 */
class MemberDownload extends Model
{
    // 表名
    protected $name = 'member_download';
    // 开启自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = false;
    // 追加属性
    protected $append = [];

    public function content()
    {
        return $this->hasOne(Content::class,'id','content_id');
    }
}
