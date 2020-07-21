<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use fast\Tree;
use think\Db;

/**
 * 分类管理
 *
 * @icon fa fa-circle-o
 */
class Category extends Backend
{
    
    /**
     * Category模型对象
     * @var \app\admin\model\Category
     */
    protected $model = null;
    protected $lans;
    protected $cates;
    protected $cateList;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Category;
        $this->lans = model('language')->select();
        $this->cates = model('category')->where('pid',0)->select();
        $cateList = collection($this->model->order('weigh DESC,id ASC')->select())->toArray();
        Tree::instance()->init($cateList);
        $this->cateList = Tree::instance()->getTreeList(Tree::instance()->getTreeArray(0), 'name');
    }
    /**
     * 查看
     */
    public function index()
    {
        if ($this->request->isAjax()) {
            $list = $this->cateList;
            $total = count($this->cateList);
            $result = array("total" => $total, "rows" => $list);
            return json($result);
        }
        return $this->view->fetch();
    }
    /**
     * 添加
     */
    public function add()
    {
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            if ($params) {
                $params = $this->preExcludeFields($params);

                if ($this->dataLimit && $this->dataLimitFieldAutoFill) {
                    $params[$this->dataLimitField] = $this->auth->id;
                }
                $result = false;
                Db::startTrans();
                try {
                    //是否采用模型验证
                    if ($this->modelValidate) {
                        $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                        $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.add' : $name) : $this->modelValidate;
                        $this->model->validateFailException(true)->validate($validate);
                    }
                    $result = $this->model->allowField(true)->save($params);
                    Db::commit();
                } catch (\Exception $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }
                if ($result !== false) {
                    $this->success();
                } else {
                    $this->error(__('No rows were inserted'));
                }
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $this->assign('lans',$this->lans);
        $this->assign('cates',$this->cates);
        return $this->view->fetch();
    }
    /**
     * 编辑
     */
    public function edit($ids = null)
    {
        $row = $this->model->get($ids);
        if (!$row) {
            $this->error(__('No Results were found'));
        }
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds)) {
            if (!in_array($row[$this->dataLimitField], $adminIds)) {
                $this->error(__('You have no permission'));
            }
        }
        if ($this->request->isPost()) {
            $params = $this->request->param();
            if ($params) {
                //更新内容
                $params = $this->preExcludeFields($params);
                //$result = false;
                Db::startTrans();
                try {
                    //是否采用模型验证
                    $trans = model('TransCategory')->where(['category_id'=>$ids])->select();
                    if($trans){
                        //先删除
                        model('TransCategory')->where('category_id',$ids)->delete();
                        foreach ($params['language'] as $key=>$val){
                            model('TransCategory')->insert([
                                'category_id'=>$ids,
                                'language'=>$val,
                                'name'=>$params['title'][$key],
                                'content'=>$params['content'][$key],
                            ]);
                        }
                    }else{
                        foreach ($params['language'] as $key=>$val){
                            model('TransCategory')->insert([
                                'category_id'=>$ids,
                                'language'=>$val,
                                'name'=>$params['title'][$key],
                                'content'=>$params['content'][$key],
                            ]);
                        }
                    }
                    Db::commit();
                } catch (\Exception $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }
                $this->success();
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        //获取列表
        $trans = model('TransCategory')->where('category_id',$ids)->select();
        $this->assign('lans',$this->lans);
        $this->assign('trans',$trans);
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }

}
