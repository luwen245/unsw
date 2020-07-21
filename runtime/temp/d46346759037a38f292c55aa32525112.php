<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:68:"D:\code\unsw\public/../application/admin\view\content\editbrand.html";i:1594098258;s:55:"D:\code\unsw\application\admin\view\layout\default.html";i:1583049507;s:52:"D:\code\unsw\application\admin\view\common\meta.html";i:1583049507;s:54:"D:\code\unsw\application\admin\view\common\script.html";i:1583049507;}*/ ?>
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
                                <form id="add-form" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">

    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2">Language:</label>
        <div class="col-xs-12 col-sm-8">
            <label class="radio-inline">
                <input type="radio" name="row[language]" <?php if($row['language'] == 'All'): ?>checked<?php endif; ?> value="All"> All
            </label>
            <?php if(is_array($lans) || $lans instanceof \think\Collection || $lans instanceof \think\Paginator): if( count($lans)==0 ) : echo "" ;else: foreach($lans as $key=>$vo): ?>
            <label class="radio-inline">
                <input type="radio" name="row[language]" <?php if($row['language'] == $vo['name']): ?>checked<?php endif; ?> value="<?php echo $vo['name']; ?>"> <?php echo $vo['name']; ?>
            </label>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </div>
    </div>

    <input type="hidden" name="row[category_id]" value="<?php echo $category_id; ?>"/>
    <input type="hidden" name="row[type]" value="brand"/>

    <div class="form-group" id="file">
        <label class="control-label col-xs-12 col-sm-2">File:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-document" data-rule="required" class="form-control" size="50" name="row[document]" type="text" value="<?php echo $row['document']; ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-document" class="btn btn-danger plupload" data-input-id="c-document"  data-mimetype="zip,rar,xls,xlsx,pdf,doc,docx" data-multiple="false" data-preview-id="p-document"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-document" class="btn btn-primary fachoose" data-input-id="c-document" data-mimetype="zip,rar,xls,xlsx,pdf,doc,docx" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-document"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-document"></ul>
        </div>
    </div>

    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2">Publish Time:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-publishtime" class="form-control datetimepicker" data-date-format="DD MM YYYY" data-use-current="true" name="row[publishtime]" type="text" value="<?php echo date('d m Y',$row['publishtime']); ?>">
        </div>
    </div>

    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="submit" class="btn btn-success btn-embossed disabled"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo htmlentities($site['version']); ?>"></script>
    </body>
</html>