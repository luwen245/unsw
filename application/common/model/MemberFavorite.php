<?php

namespace app\common\model;

use app\admin\model\Content;
use think\Model;

/**
 * 分类模型
 */
class MemberFavorite extends Model
{
    // 表名
    protected $name = 'member_favorite';
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
