var p=document.querySelector("#skill");
var q=document.querySelector(".drop_li_ul");
var num=0;
p.addEventListener("click",()=>{
    
    if (num==0) {
        q.style.opacity=1;
        q.style. visibility=`visible`;
        num=1;
        
    }else{
        q.style.opacity=0;
        q.style.visibility=`hidden`;
        num=0;

    }
   
})