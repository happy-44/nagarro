let btn=document.querySelector('button');
btn.addEventListener('click',fn);
function fn(){
    if(confirm("are you want to proceed")){
        window.location="index2.html";
    }
    
}