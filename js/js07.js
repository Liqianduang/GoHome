function change(myid,mode){
   
    document.getElementById(myid).style.display=mode;
    if(mode=='block'){//显示下拉菜单
        //设置下拉菜单所在div的边框
        document.getElementById(myid).style.border="1px solid #eee";
        document.getElementById(myid).style.borderTop="none";
        //设置鼠标滑过的li的边框及背景色
        document.getElementById(myid).parentNode.style.backgroundColor="#fff";
        document.getElementById(myid).parentNode.style.border="1px solid #eee";
        document.getElementById(myid).parentNode.style.borderBottom="none";
    }
    else{
        //当不显示下拉菜单时，鼠标滑过的li的边框及背景色
        document.getElementById(myid).parentNode.style.backgroundColor="";
        document.getElementById(myid).parentNode.style.border="";
    }
}



function changeColor(){
    //获取所有行
    var trs = document.getElementById("tbl").getElementsByTagName("tr");


    
    for(var i=2;i<trs.length;i=i+2){
        trs[i].className="even";
    }
}