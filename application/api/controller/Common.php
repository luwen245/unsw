<?php

namespace app\api\controller;

use app\common\controller\Api;
use app\common\model\Area;
use app\common\model\Version;
use fast\Language;
use fast\Random;
use think\Config;

/**
 * 公共接口
 */
class Common extends Api
{
    protected $noNeedLogin = ['init'];
    protected $noNeedRight = '*';

    /**
     * 初始化接口
     *
     * @ApiTitle    (国际化)
     * @ApiSummary (国际化信息 语种信息)
     * @ApiMethod(GET)
     */
    public function init()
    {
      //获取语种信息
        $language = new Language();
        $lang = $language->getPreferredLanguage();
        $language = model('admin/text')->where('language',$lang)->select();
        $trans = Config('trans');
        $language = collection($language)->toArray();
        $data = [];
        $res = [];
        if($language){
            foreach ($language as $key=>$val){
                $res[$val['text']] = $val['trans'];
            }
            foreach ($trans as $val1){
                $data[$val1] = empty($res[$val1])?$val1:$res[$val1];
            }
        }else{
            foreach ($trans as $tran){
                $data[$tran] = $tran;
            }
        }
        $this->success('Success',[
            'language'=>$lang,
            'translate'=>$data
        ]);
    }
}
