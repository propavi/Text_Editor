function f1(e){
    let value = e.value;
    document.querySelector("textarea").style.fontSize = value + "px";
}

document.querySelector(".two").addEventListener("click",function()
{
    if(document.querySelector("textarea").style.fontWeight != "bold")
    {
    document.querySelector("textarea").style.fontWeight = "bold";
    }
    else{
        document.querySelector("textarea").style.fontWeight = "normal";
    }
    
})

document.querySelector(".three").addEventListener("click",function()
{
    if(document.querySelector("textarea").style.fontStyle != "italic")
    {
    document.querySelector("textarea").style.fontStyle = "italic";
    }
    else{
        document.querySelector("textarea").style.fontStyle = "normal";
    }
    
})

document.querySelector(".four").addEventListener("click",function()
{
    if(document.querySelector("textarea").style.textDecoration != "underline")
    {
    document.querySelector("textarea").style.textDecoration = "underline";
    }
    else{
        document.querySelector("textarea").style.textDecoration = "none";
    }
    
})

document.querySelector(".five").addEventListener("click",function()
{
    if(document.querySelector("textarea").style.textAlign != "left")
    {
    document.querySelector("textarea").style.textAlign = "left";
    }   
})

document.querySelector(".six").addEventListener("click",function()
{
    if(document.querySelector("textarea").style.textAlign != "center")
    {
    document.querySelector("textarea").style.textAlign = "center";
    }
    
})

document.querySelector(".seven").addEventListener("click",function()
{
    if(document.querySelector("textarea").style.textAlign != "right")
    {
    document.querySelector("textarea").style.textAlign = "right";
    }
})

document.querySelector(".eight").addEventListener("click",function()
{
    if(document.querySelector("textarea").style.textTransform != "uppercase")
    {
    document.querySelector("textarea").style.textTransform = "uppercase";
    }
    else{
        document.querySelector("textarea").style.textTransform = "lowercase";
    }
    
})

document.querySelector(".nine").addEventListener("click",function()
{
    document.querySelector("textarea").style.fontSize = 16 + "px";
    document.querySelector("textarea").style.fontWeight = "normal";
    document.querySelector("textarea").style.fontStyle = "normal";
    document.querySelector("textarea").style.textDecoration = "none";
    document.querySelector("textarea").style.textAlign = "left";
    document.querySelector("textarea").style.textTransform = "lowercase";
    document.querySelector("textarea").style.color = "black";
    document.querySelector("textarea").value = "";
})

function f10(e)
{
    document.querySelector("textarea").style.color = e.value;
}

