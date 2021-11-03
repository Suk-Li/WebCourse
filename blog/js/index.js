$(function(){
    var list = [
        {"number":1,"class":"计Z1911","stuNum":"10101","stuName":"Suk1","age":18,"contact":"15150001321","remark":""},
        {"number":2,"class":"计Z1911","stuNum":"10102","stuName":"Suk2","age":18,"contact":"15150001322","remark":""},
        {"number":3,"class":"计Z1911","stuNum":"10103","stuName":"Suk3","age":18,"contact":"15150001323","remark":""},
        {"number":4,"class":"计Z1911","stuNum":"10104","stuName":"Suk4","age":18,"contact":"15150001324","remark":""},
        {"number":5,"class":"计Z1911","stuNum":"10105","stuName":"Suk5","age":18,"contact":"15150001325","remark":""},
        {"number":6,"class":"计Z1911","stuNum":"10106","stuName":"Suk6","age":18,"contact":"15150001326","remark":""},
    ]
    var rawTb = "";
    for(var i= 0;i<list.length;i++){
        rawTb+="<tr>"+
                    "<td>"+list[i].number+"</td>"+
                    "<td>"+list[i].class+"</td>"+
                    "<td>"+list[i].stuNum+"</td>"+
                    "<td>"+list[i].stuName+"</td>"+
                    "<td>"+list[i].age+"</td>"+
                    "<td>"+list[i].contact+"</td>"+
                    "<td>"+list[i].remark+"</td>"+
                "</tr>"
        
    }
    
    $("#tbody").html(rawTb)
})