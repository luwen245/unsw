<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:64:"D:\code\unsw\public/../application/admin\view\category\edit.html";i:1595248590;s:55:"D:\code\unsw\application\admin\view\layout\default.html";i:1583049507;s:52:"D:\code\unsw\application\admin\view\common\meta.html";i:1583049507;s:54:"D:\code\unsw\application\admin\view\common\script.html";i:1583049507;}*/ ?>
<!DOCTYPE html>
<html lang="<?php echo $config['language']; ?>">
    <head>
        <meta charset="utf-8">
<title><?php echo (isset($title) && ($title !== '')?$title:''); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">

<link rel="shortcut icon" href="/assets/img/favicon.ico" />
<!-- Loading Bootstrap -->
<link href="/assets/css/backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.css?v=<?php echo \think\Config::get('site.version'); ?>" rel="stylesheet">

<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
  <script src="/assets/js/html5shiv.js"></script>
  <script src="/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    var require = {
        config:  <?php echo json_encode($config); ?>
    };
</script>
    </head>

    <body class="inside-header inside-aside <?php echo defined('IS_DIALOG') && IS_DIALOG ? 'is-dialog' : ''; ?>">
        <div id="main" role="main">
            <div class="tab-content tab-addtabs">
                <div id="content">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <section class="content-header hide">
                                <h1>
                                    <?php echo __('Dashboard'); ?>
                                    <small><?php echo __('Control panel'); ?></small>
                                </h1>
                            </section>
                            <?php if(!IS_DIALOG && !\think\Config::get('fastadmin.multiplenav')): ?>
                            <!-- RIBBON -->
                            <div id="ribbon">
                                <ol class="breadcrumb pull-left">
                                    <li><a href="dashboard" class="addtabsit"><i class="fa fa-dashboard"></i> <?php echo __('Dashboard'); ?></a></li>
                                </ol>
                                <ol class="breadcrumb pull-right">
                                    <?php foreach($breadcrumb as $vo): ?>
                                    <li><a href="javascript:;" data-url="<?php echo $vo['url']; ?>"><?php echo $vo['title']; ?></a></li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                            <!-- END RIBBON -->
                            <?php endif; ?>
                            <div class="content">
                                <script type="text/javascript" src="/editor/release/wangEditor.min.js"></script>
<form id="add-form" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">
    <input type="hidden" name="category_id" value="<?php echo $row['id']; ?>">
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2">Translate:</label>

        <div class="col-xs-12 col-sm-8">
            <div id="container_div">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>language</th>
                        <th>title</th>
                        <th>content</th>
                        <th>operate</th>
                    </tr>
                    </thead>
                    <tbody id="appendData">
                    <?php if(is_array($trans) || $trans instanceof \think\Collection || $trans instanceof \think\Paginator): if( count($trans)==0 ) : echo "" ;else: foreach($trans as $key=>$vo): ?>
                        <tr>
                            <td><?php echo $vo['language']; ?></td>
                            <td><?php echo $vo['name']; ?></td>
                            <td><?php echo $vo['content']; ?></td>
                            <td>
                                <input type="button" class="btn btn-warm" id="editTr" value='Edit'>
                                <input type="button" class="btn btn-danger" id="deleteTr" value='Delete'>
                            </td>
                        </tr>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                    </tbody>
                </table>
            </div>
            <button class="btn btn-default"  type="button" data-toggle="modal" data-target="#myModal">Add Language</button>
        </div>
    </div>

   <!-- <div id="catecontene">
        <div class="form-group">
            <label class="control-label col-xs-12 col-sm-2">Title:</label>
            <div class="col-xs-12 col-sm-8">
                <input id="c-name" data-rule="required" class="form-control" name="row[name]" type="text">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-xs-12 col-sm-2"><?php echo __('Content'); ?>:</label>
            <div class="col-xs-12 col-sm-8">
                <textarea id="c-content" class="form-control editor" rows="5" name="row[content]" cols="50"></textarea>
            </div>
        </div>
    </div>-->

    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="button" id="test" class="btn btn-success btn-embossed"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>


<div class="modal fade" id="myModal" tabindex="-1"  aria-hidden="true">
    <div class="modal-dialog">
        <form action=""  id="attr"  role="form">
            <div class="modal-content" style="height: 580px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Contents</h4>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="form-group row">
                            <label class="control-label col-xs-12 col-md-1 col-sm-2">Language:</label>
                            <div class="col-xs-12 col-md-6 col-sm-8">
                                <select id="c-language" class="form-control" name="row[language]">
                                    <option class="form-control"  value="All">All</option>
                                    <?php if(is_array($lans) || $lans instanceof \think\Collection || $lans instanceof \think\Paginator): if( count($lans)==0 ) : echo "" ;else: foreach($lans as $key=>$vo): ?>
                                        <option class="form-control" value="<?php echo $vo['name']; ?>"><?php echo $vo['name']; ?></option>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-xs-12 col-md-1 col-sm-2">Title:</label>
                            <div class="col-xs-12 col-md-6 col-sm-8">
                                <input id="c-name" data-rule="required" class="form-control" name="row[name]" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-xs-12 col-md-1 col-sm-2">Content:</label>
                            <div class="col-xs-12 col-md-6 col-sm-4">
                                <div id="editor"></div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="submit_attr">Submit</button>
                    </div>
                </div>
            </div><!-- /.modal-content -->
        </form>
    </div><!-- /.modal -->
</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo htmlentities($site['version']); ?>"></script>
    </body>
</html>