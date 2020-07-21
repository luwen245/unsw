define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'language/index' + location.search,
                    add_url: 'language/add',
                    edit_url: 'language/edit',
                    del_url: 'language/del',
                    multi_url: 'language/multi',
                    table: 'language',
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
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'name', title: __('Name')},
                        {field: 'local', title: __('Local')},
                        {field: 'code', title: __('Code')},
                        {field: 'cou_code', title: __('Cou_code')},
                        {
                            field: 'operate',
                            width: "150px",
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'caozuo',
                                    text: 'Setting',
                                    classname: 'btn btn-xs btn-primary btn-dialog btn-operate',
                                    icon: 'fa fa-list',
                                    extend: 'data-area=\'["1000px", "600px"]\'',
                                    url: 'language/setting',
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
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        setting:function(){
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