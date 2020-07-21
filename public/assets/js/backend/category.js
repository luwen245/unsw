define(['jquery', 'bootstrap', 'backend', 'table', 'form','layer'], function ($, undefined, Backend, Table, Form,Layer) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'category/index' + location.search,
                    add_url: 'category/add',
                    edit_url: 'category/edit',
                    del_url: 'category/del',
                    multi_url: 'category/multi',
                    table: 'category',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'weigh',
                escape: false,
                columns: [
                    [
                        {field: 'name', title: __('Name')},
                        {field: 'weigh', title: __('Weigh')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {
                            field: 'operate',
                            width: "150px",
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'caozuo',
                                    text: 'Add Items',
                                    classname: 'btn btn-xs btn-primary btn-dialog btn-operate',
                                    icon: 'fa fa-list',
                                    extend: 'data-area=\'["1000px", "600px"]\'',
                                    url: function (row) {
                                        if(row['id']==13 || row['id']==15 || row['id']==16 || row['id']== 17 || row['id']== 5 || row['id']== 6 || row['id']==9){
                                           return 'content/document?category_id='+row['id'];
                                        }else if(row['id']==21){
                                            return 'content/image?category_id='+row['id'];
                                        }else if(row['id']==20){
                                            return 'content/video?category_id='+row['id'];
                                        }else if(row['id']==10){
                                            return 'region/index';
                                        }else if(row['id']==8){
                                            return 'content/scholarship?category_id='+row['id'];
                                        }else if(row['id']==7){
                                            return 'content/event?category_id='+row['id'];
                                        }else if(row['id']==22){
                                            return 'content/question?category_id='+row['id'];
                                        }else if(row['id']==18){
                                            return 'content/brand?category_id='+row['id'];
                                        }else if(row['id']==4){
                                            return 'content/news?category_id='+row['id'];
                                        }
                                    }
                                }
                            ],
                            formatter: function (value, row, index) { //隐藏自定义的视频按钮
                            var that = $.extend({}, this);
                            var table = $(that.table).clone(true);
                            if (index == 0 || index == 1 || index == 7 || index ==  19 || index == 18 || index ==  20 || index == 21) {
                                $(table).data("operate-caozuo", null);
                            }
                            that.table = table;
                            return Table.api.formatter.operate.call(that, value, row, index);
                            }
                        }
                    ]
                ],
                pagination: false,
                search: false,
                commonSearch: false
            });

            // 为表格绑定事件
            table.on('post-body.bs.table',function () {
                $(".btn-editone").data("area", ["1000px","800px"]);
            });

            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        guide: function () {
            Table.api.init({
                extend: {
                    index_url: 'content/index' + location.search + '&category_id=' + $('input[name=ids]').val(),
                    add_url: 'content/add?category_id=' + $('input[name=ids]').val(),
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
                escape: false,
                columns: [
                    [
                        {field: 'name', title: __('Name')},
                        {field: 'pid', title: __('Parent_id')},
                        {field: 'language', title: __('Language')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            // 为表格绑定事件
            table.on('post-body.bs.table',function () {
                $(".btn-operate").data("area", ["1000px","1000px"]);
            });
            Table.api.bindevent(table);
        },
        addguide:function(){
            Controller.api.bindevent();
        },
        edit: function () {
            var E = window.wangEditor;
            var editor = new E(document.getElementById('editor'));
            editor.customConfig.lang = {
                '设置标题': 'title',
                '正文': 'p',
                '链接文字': 'link text',
                '链接': 'link',
                '上传图片': 'upload image',
                '上传': 'upload',
                '创建': 'init',
                '字号':'font size',
            };
            editor.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'fontSize',  // 字号
                'fontName',  // 字体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'link',  // 插入链接
                'justify',  // 对齐方式
                'image',  // 插入图片
                'video',  // 插入视频
                'undo',  // 撤销
            ];
            // 或者 var editor = new E( document.getElementById('editor') )
            editor.create();
            $('#submit_attr').on('click',function () {
                var data = $("#attr").serializeArray();
                var content = editor.txt.html();
                if(td){
                    td.parent().parent().remove();
                }
                var str = '';
                str += '<tr>' +
                    '                            <td>'+ data[0].value +'</td>' +
                    '                            <td>'+ data[1].value + '</td>' +
                    '                            <td>'+ content + '</td>' +
                    '                            <td>'+ '<input type="button" class="btn btn-warm" id="editTr" value=' + __('Edit') + '><input type="button" class="btn btn-danger" id="deleteTr" value=' + 'Delete' + '>' +'</td>' +
                    '                        </tr>';
                $('#appendData').prepend(str);
                document.getElementById("attr").reset();
                $('#myModal').modal('hide');
                $("#myModal").on("hiden.bs.modal",function(){
                    $(this).removeData("bs.modal");
                });
                editor.txt.html('')
            });
            var td;
            $("#container_div").delegate("#editTr","click",function(){
                //模态框显示
                $('#c-language').val($(this).parent().parent()[0].cells[0].innerText);
                $('#c-name').val($(this).parent().parent()[0].cells[1].innerText);
                editor.txt.text($(this).parent().parent()[0].cells[2].innerHTML);
                td = $(this);
                $('#myModal').modal('show');
            });
            $("#container_div").delegate("#deleteTr","click",function(){
                $(this).parent().parent().remove();
            });

            $('#test').on('click',function () {
                var language = [];
                var title = [];
                var content = [];
                $('#appendData tr').each(function(i){                   // 遍历 tr
                       $(this).children('td').each(function(j){  // 遍历 tr 的各个 td
                             // alert("第"+(i+1)+"行，第"+(j+1)+"个td的值："+$(this).text()+"。");
                             if(j == 0){
                                 language.push($(this).text());
                              }else if(j == 1){
                                 title.push($(this).text());
                             }else if(j == 2){
                                 content.push($(this).html());
                             }
                       });
                });
                $.post({
                    url:"category/edit/ids/"+$('input[name=category_id]').val(),
                    data:{language:language,title:title,content:content},
                    success:function(result){
                        if(result.code == 1){
                            parent.layer.closeAll()
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