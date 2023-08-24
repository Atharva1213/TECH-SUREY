
const Student={
    name:null,
    mail:null, 
    question:{
        q1:null,
        q2:null, 
        g3:null
    }
    };
function next_page() 
{      
     document.getElementById("container-second").style.display="none";
     document.getElementById("container-third").style.display="block";
}  
function pre_page() 
{      
     document.getElementById("container-second").style.display="block";
     document.getElementById("container-third").style.display="none";
}
function save_page() 
{
     alert("THANK YOU");
}