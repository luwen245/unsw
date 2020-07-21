define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'member/index' + location.search,
                    add_url: 'member/add',
                    edit_url: 'member/edit',
                    del_url: 'member/del',
                    multi_url: 'member/multi',
                    table: 'member',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {field: 'id', title: __('Id')},
                        {field: 'full_name', title: __('Full_name')},
                        {field: 'ip', title: __('Ip')},
                        {field: 'email', title: __('Email')},
                        {field: 'login_time', title: __('Login_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'country', title: __('Country')},
                        {field: 'company_name', title: __('Company_name')},
                        {field: 'status', title: __('Status'), searchList: {"0":"Check","1":"Pass","2":"Failed"}, formatter: Table.api.formatter.status},
                        {field: 'download_times', title: __('Download_times')},
                        {
                            field: 'operate',
                            width: "150px",
                            title: __('Check'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'caozuo',
                                    text: 'operate',
                                    classname: 'btn btn-xs btn-primary btn-dialog btn-operate',
                                    icon: 'fa fa-list',
                                    extend: 'data-area=\'["1000px", "600px"]\'',
                                    url: 'member/check'
                                }
                            ],
                            formatter: Table.api.formatter.operate
                        }
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        check:function(){
            $('#Pass').on('click',function () {
                //审核通过
                $.ajax({
                    type: "GET",
                    url: "member/pass",
                    data:{id:$('input[name=id]').val()},
                    dataType: "json",
                    success: function(data){
                        if(data.code == 1){
                          $('#status').html('<span style="color:blue;">Pass</span>');
                        }
                    }
                });
            });
            $('#Failed').on('click',function () {
                //审核失败
                $.ajax({
                    type: "GET",
                    url: "member/failed",
                    data:{id:$('input[name=id]').val()},
                    dataType: "json",
                    success: function(data){
                        if(data.code == 1){
                            $('#status').html('<span style="color:red;">Failed</span>');
                        }
                    }
                });
            });
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});