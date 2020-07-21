define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'content/index' + location.search,
                    add_url: 'content/add',
                    edit_url: 'content/edit',
                    del_url: 'content/del',
                    multi_url: 'content/multi',
                    table: 'content',
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
                        {field: 'category_id', title: __('Category_id')},
                        {field: 'title', title: __('Title')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'type', title: __('Type'), searchList: {"Type:0=Images":__('Type:0=images'),"1=Video":__('1=video'),"2=Document":__('2=document'),"3=Content":__('3=content')}, formatter: Table.api.formatter.normal},
                        {field: 'images', title: __('Images'), events: Table.api.events.image, formatter: Table.api.formatter.images},
                        {field: 'image', title: __('Image'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'document', title: __('Document')},
                        {field: 'Parent_id', title: __('Parent_id')},
                        {field: 'Publishtime', title: __('Publishtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'Status', title: __('Status')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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
        document: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'content/document' + location.search + '&category_id='+$('input[name=ids]').val(),
                    add_url: 'content/adddocument?category_id='+$('input[name=ids]').val(),
                    edit_url: 'content/editdocument?category_id='+$('input[name=ids]').val(),
                    del_url: 'content/del',
                    multi_url: 'content/multi',
                    table: 'content',
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
                        {field: 'title', title: __('Title')},
                        {field: 'language', title: __('Language')},
                        {field: 'images', title: __('Images'), events: Table.api.events.image, formatter: Table.api.formatter.images},
                        {field: 'document', title: __('Document')},
                        {field: 'publishtime_date', title: __('Publish Time')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        adddocument:function () {
            Controller.api.bindevent();
        },
        editdocument:function () {
            Controller.api.bindevent();
        },
        image: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'content/image' + location.search + '&category_id='+$('input[name=ids]').val(),
                    add_url: 'content/addimage?category_id='+$('input[name=ids]').val(),
                    edit_url: 'content/editimage?category_id='+$('input[name=ids]').val(),
                    del_url: 'content/del',
                    multi_url: 'content/multi',
                    table: 'content',
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
                        {field: 'language', title: __('Language')},
                        {field: 'image', title: __('Image'), events: Table.api.events.image, formatter: Table.api.formatter.images},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        addimage:function () {
            Controller.api.bindevent();
        },
        editimage:function () {
            Controller.api.bindevent();
        },
        scholarship: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'content/scholarship' + location.search + '&category_id='+$('input[name=ids]').val(),
                    add_url: 'content/addscholarship?category_id='+$('input[name=ids]').val(),
                    edit_url: 'content/editscholarship?category_id='+$('input[name=ids]').val(),
                    del_url: 'content/del',
                    multi_url: 'content/multi',
                    table: 'content',
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
                        {field: 'language', title: __('Language')},
                        {field: 'images', title: __('Images'), events: Table.api.events.image, formatter: Table.api.formatter.images},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        addscholarship:function () {
            Controller.api.bindevent();
        },
        editscholarship:function () {
            Controller.api.bindevent();
        },
        event: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'content/event' + location.search + '&category_id='+$('input[name=ids]').val(),
                    add_url: 'content/addevent?category_id='+$('input[name=ids]').val(),
                    edit_url: 'content/editevent?category_id='+$('input[name=ids]').val(),
                    del_url: 'content/del',
                    multi_url: 'content/multi',
                    table: 'content',
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
                        {field: 'title', title: __('Title')},
                        {field: 'language', title: __('Language')},
                        {field: 'address', title: __('Address')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        addevent:function () {
            Controller.api.bindevent();
        },
        editevent:function () {
            Controller.api.bindevent();
        },
        question: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'content/question' + location.search + '&category_id='+$('input[name=ids]').val(),
                    add_url: 'content/addquestion?category_id='+$('input[name=ids]').val(),
                    edit_url: 'content/editquestion?category_id='+$('input[name=ids]').val(),
                    del_url: 'content/del',
                    multi_url: 'content/multi',
                    table: 'content',
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
                        {field: 'language', title: __('Language')},
                        {field: 'belong', title: __('Classify')},
                        {field: 'content', title: __('Content')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        addquestion:function () {
            Controller.api.bindevent();
        },
        editquestion:function () {
            Controller.api.bindevent();
        },
        video: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'content/video' + location.search + '&category_id='+$('input[name=ids]').val(),
                    add_url: 'content/addvideo?category_id='+$('input[name=ids]').val(),
                    edit_url: 'content/editvideo?category_id='+$('input[name=ids]').val(),
                    del_url: 'content/del',
                    multi_url: 'content/multi',
                    table: 'content',
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
                        {field: 'language', title: __('Language')},
                        {field: 'belong', title: __('Classify')},
                        {field: 'image', title: __('Image')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        addvideo:function () {
            Controller.api.bindevent();
        },
        editvideo:function () {
            Controller.api.bindevent();
        },
        brand: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'content/brand' + location.search + '&category_id='+$('input[name=ids]').val(),
                    add_url: 'content/addbrand?category_id='+$('input[name=ids]').val(),
                    edit_url: 'content/editbrand?category_id='+$('input[name=ids]').val(),
                    del_url: 'content/del',
                    multi_url: 'content/multi',
                    table: 'content',
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
                        {field: 'language', title: __('Language')},
                        {field: 'document', title: __('Document')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        addbrand:function () {
            Controller.api.bindevent();
        },
        editbrand:function () {
            Controller.api.bindevent();
        },
        news: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'content/brand' + location.search + '&category_id='+$('input[name=ids]').val(),
                    add_url: 'content/addnews?category_id='+$('input[name=ids]').val(),
                    edit_url: 'content/editnews?category_id='+$('input[name=ids]').val(),
                    del_url: 'content/del',
                    multi_url: 'content/multi',
                    table: 'content',
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
                        {field: 'language', title: __('Language')},
                        {field: 'image', title: __('Image'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'images', title: __('Images'), events: Table.api.events.image, formatter: Table.api.formatter.images},
                        {field: 'document', title: __('Document')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        addnews:function () {
            Controller.api.bindevent();
        },
        editnews:function () {
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