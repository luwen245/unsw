<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use think\Db;

/**
 * 语音管理
 *
 * @icon fa fa-language
 */
class Language extends Backend
{
    
    /**
     * Language模型对象
     * @var \app\admin\model\Language
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Language;

    }
    //系统变量设置
    public function setting($ids=null)
    {
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            if ($params) {
                $params = $this->preExcludeFields($params);
                if ($this->dataLimit && $this->dataLimitFieldAutoFill) {
                    $params[$this->dataLimitField] = $this->auth->id;
                }
                Db::startTrans();
                try {
                    foreach ($params as $key=>$val){
                        $res = model('text')->where([
                            'text'=>$key,
                            'language'=>$this->request->post('language')
                        ])->find();
                        if($res){
                            $res->where('id',$res['id'])->update(['trans'=>$val]);
                        }else{
                            model('text')->insert([
                                'language'=>$this->request->post('language'),
                                'text'=>$key,
                                'trans'=>$val
                            ]);
                        }
                    }
                    Db::commit();
                }  catch (\Exception $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }

                $this->success('操作成功');
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $row = $this->model->find($ids);
        $trans = config('trans');
        $data = [];
        foreach ($trans as $val){
           $text = model('text')->where(['text'=>$val,'language'=>$row['code']])->find();
           $data[$val] = $text['trans'];
        }
        $this->assign('data',$data);
        $this->assign('row',$row);
        return $this->view->fetch();
    }

}
