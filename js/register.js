$(function(){
    layui.use(['form', 'layedit', 'laydate'], function(){
        var form = layui.form
        ,layer = layui.layer
        ,layedit = layui.layedit
        ,laydate = layui.laydate;
        laydate.render({
          elem: '#date'
        });
        
        var editIndex = layedit.build('LAY_demo_editor');
        form.verify({
          title: function(value){
            if(value.length < 5){
              return '用户名至少得5个字符啊';
            }
          },
          usercode: function(value){
            if(value.length < 11){
              return '学号至少得11个字符啊';
            }
          }
          ,pass: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ]
          ,content: function(value){
            layedit.sync(editIndex);
          }
        });
        
        form.on('submit(demo1)', function(data){
          layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
          })
          return false;
        });
        layui.$('#LAY-component-form-setval').on('click', function(){
          form.val('example', {
            "username": "Suk"
            ,"usercode": "19200135146"
            ,"password": "123456"
            ,"class": 1
            ,"date": '2021-11-02'
            ,"like[write]": true 
            ,"close": true 
            ,"sex": "女"
            ,"desc": "这个人很懒，什么都没留下"
          });
        });
        
      });
})