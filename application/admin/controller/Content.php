<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use think\Db;

/**
 * Content
 *
 * @icon fa fa-circle-o
 */
class Content extends Backend
{
    
    /**
     * Content模型对象
     * @var \app\admin\model\Content
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Content;
        $this->view->assign("typeList", $this->model->getTypeList());
    }
    //文档下载 document
    public function document()
    {
        //设置过滤方法
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            $addWhere = [];
            if($category_id = $this->request->get('category_id')){
                $addWhere['category_id'] = $category_id;
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->count();
            $list = $this->model
                ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
            foreach ($list as $key=>$val){
                $list[$key]['publishtime_date'] = date('d m Y',$val['publishtime']);
            }
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);
            return json($result);
        }
        $this->assign('ids',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function adddocument()
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $this->model->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function editdocument($ids = null)
    {
        $row = $this->model->get($ids);
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $row->allowField(true)->save($params);
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
    //图片 image
    public function image()
    {
        //设置过滤方法
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            $addWhere = [];
            if($category_id = $this->request->get('category_id')){
                $addWhere['category_id'] = $category_id;
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->count();
            $list = $this->model
                ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);
            return json($result);
        }
        $this->assign('ids',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function addimage()
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $this->model->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function editimage($ids=null)
    {
        $row = $this->model->get($ids);
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $row->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
    //视频 video
    public function video()
    {
        //设置过滤方法
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            $addWhere = [];
            if($category_id = $this->request->get('category_id')){
                $addWhere['category_id'] = $category_id;
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->count();
            $list = $this->model
                ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);
            return json($result);
        }
        $this->assign('ids',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function addvideo()
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $this->model->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function editvideo($ids=null)
    {
        $row = $this->model->get($ids);
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $row->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
    //scholarship
    public function scholarship()
    {
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            $addWhere = [];
            if ($category_id = $this->request->get('category_id')) {
                $addWhere['category_id'] = $category_id;
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
               // ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->count();
            $list = $this->model
              //  ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);
            return json($result);
        }
        $this->assign('ids',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function addscholarship()
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $this->model->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function editscholarship($ids=null)
    {
        $row = $this->model->get($ids);
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $row->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
    //scholarship
    public function event()
    {
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            $addWhere = [];
            if ($category_id = $this->request->get('category_id')) {
                $addWhere['category_id'] = $category_id;
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
               // ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->count();
            $list = $this->model
              //  ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);
            return json($result);
        }
        $this->assign('ids',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function addevent()
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $this->model->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function editevent($ids=null)
    {
        $row = $this->model->get($ids);
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $row->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
    //faq
    public function question()
    {
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            $addWhere = [];
            if ($category_id = $this->request->get('category_id')) {
                $addWhere['category_id'] = $category_id;
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
              //  ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->count();
            $list = $this->model
               // ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);
            return json($result);
        }
        $this->assign('ids',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function addquestion()
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $this->model->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function editquestion($ids=null)
    {
        $row = $this->model->get($ids);
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $row->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
    //brand
    public function brand()
    {
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            $addWhere = [];
            if ($category_id = $this->request->get('category_id')) {
                $addWhere['category_id'] = $category_id;
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                //  ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->count();
            $list = $this->model
                // ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);
            return json($result);
        }
        $this->assign('ids',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function addbrand()
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $this->model->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function editbrand($ids=null)
    {
        $row = $this->model->get($ids);
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $row->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
    //news
    public function news()
    {
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            $addWhere = [];
            if ($category_id = $this->request->get('category_id')) {
                $addWhere['category_id'] = $category_id;
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                //  ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->count();
            $list = $this->model
                // ->where($where)
                ->where($addWhere)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);
            return json($result);
        }
        $this->assign('ids',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function addnews()
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $this->model->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        return $this->view->fetch();
    }
    public function editnews($ids=null)
    {
        $row = $this->model->get($ids);
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
                    $data = explode(' ',$params['publishtime']);
                    $params['publishtime'] = strtotime(date($data[2].'-'.$data[1].'-'.$data[0]));
                    $result = $row->allowField(true)->save($params);
                    Db::commit();
                }  catch (\Exception $e) {
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
        $lans = model('language')->select();
        $this->assign('lans',$lans);
        $this->assign('category_id',$this->request->get('category_id'));
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
}
