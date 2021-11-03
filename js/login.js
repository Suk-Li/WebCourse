layui.use(['form', 'layedit', 'laydate'], function(){
    var form = layui.form
    ,layer = layui.layer
    ,layedit = layui.layedit
    ,laydate = layui.laydate;
    
    form.on('submit(login)', function(data){
      layer.msg('登陆成功！', {icon: 6});
      return false;
    });
  })