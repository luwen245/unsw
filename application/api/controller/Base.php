<?php

namespace app\api\controller;

use app\common\controller\Api;

/**
 * 首页接口
 */
class Base extends Api
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];
    public $language;

    public function _initialize()
    {
        parent::_initialize();
        //语种翻译
        $language = $this->request->post('language')?:'en';
        if(!$language){
            $this->error('Language Can not be null');
        }
        $lang = model('admin/text')->where('language',$language)->select();
        $trans = Config('trans');
        $lang = collection($lang)->toArray();
        $data = [];
        $res = [];
        if($lang){
            foreach ($lang as $key=>$val){
                $res[$val['text']] = $val['trans'];
            }
            foreach ($trans as $val2){
                $data[$val2] = empty($res[$val2])?$val2:$res[$val2];
            }
        }else{
            foreach ($trans as $tran){
                $data[$tran] = $tran;
            }
        }
        $this->language = $data;
    }
}
