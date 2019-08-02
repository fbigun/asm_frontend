layui.use(['element', 'layer', 'form', 'table'], function () {
    var element = layui.element,
        layer = layui.layer,
        form = layui.form,
        table = layui.table;
    element.on('nav(demo)', function (elem) {
        layer.msg(elem.text());
    });
    form.on('switch(switchTest)', function (data) {
        layer.tips((this.checked ? '启用' : '禁用'), data.othis);
    });
    form.on('submit(formDemo)', function (data) {
        layer.msg(JSON.stringify(data.field));
        // layer.msg('已成功提交，请不要重复提交');
        return false;
    });
    table.render({
        elem: '#demo',
        height: 500,
        url: '', //数据接口,需要自己实现相关后端
        page: true, //开启分页
        cols: [
            [ //表头
                { field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left' },
                { field: 'username', title: '用户名', width: 80 },
                { field: 'sex', title: '性别', width: 80, sort: true },
                { field: 'city', title: '城市', width: 80 },
                { field: 'sign', title: '签名', width: 177 },
                { field: 'experience', title: '积分', width: 80, sort: true },
                { field: 'score', title: '评分', width: 80, sort: true },
                { field: 'classify', title: '职业', width: 80 },
                { field: 'wealth', title: '财富', width: 135, sort: true }
            ]
        ]
    });
});