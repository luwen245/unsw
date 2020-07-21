<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:63:"D:\code\unsw\public/../application/admin\view\member\check.html";i:1593700953;s:55:"D:\code\unsw\application\admin\view\layout\default.html";i:1583049507;s:52:"D:\code\unsw\application\admin\view\common\meta.html";i:1583049507;s:54:"D:\code\unsw\application\admin\view\common\script.html";i:1583049507;}*/ ?>
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
                                <table class="table table-striped">
    <thead>
    <tr>
        <th>Title</th>
        <th>Content</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Full Name</td>
            <td><?php echo $row['full_name']; ?></td>
        </tr>
        <tr>
            <td>Email</td>
            <td><?php echo $row['email']; ?></td>
        </tr>
        <tr>
            <td>Country</td>
            <td><?php echo $row['country']; ?></td>
        </tr>
        <tr>
            <td>Company</td>
            <td><?php echo $row['company_name']; ?></td>
        </tr>
        <tr>
            <td>Ip</td>
            <td><?php echo $row['ip']; ?></td>
        </tr>
        <tr>
            <td>Status</td>
            <td id="status">
                <?php if($row['status'] == 0): ?>
                    <input type="button" class="btn btn-primary" id="Pass" value="Pass"/>
                    <input type="button" class="btn btn-default" id="Failed" value="Failed"/>
                <?php elseif($row['status'] == 1): ?>
                     <span style="color:blue;">Pass</span>
                <?php else: ?>
                      <span style="color:red;">Failed</span>
                <?php endif; ?>
            </td>
        </tr>
    </tbody>

    <input type="hidden" name="id" value="<?php echo $row['id']; ?>"/>
</table>

<div class="hide layer-footer">
    <label class="control-label col-xs-12 col-sm-2"></label>
    <div class="col-xs-12 col-sm-8">
        <button type="reset" class="btn btn-primary btn-embossed btn-close" onclick="Layer.closeAll();"><?php echo __('Close'); ?></button>
    </div>
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