//根据表单更改iframe的src属性
function getURL() 
{ 
    document.getElementById("mobile").src = document.getElementById("url_input").value;
    document.getElementById("tablet").src = document.getElementById("url_input").value;
    document.getElementById("laptop").src = document.getElementById("url_input").value;
    document.getElementById("desktop").src = document.getElementById("url_input").value; 
} 