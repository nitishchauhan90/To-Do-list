const add=document.getElementById("btn")
const unchecked=document.querySelector(".unchecked")
const list=document.querySelector(".list")
const input=document.getElementById("inputbar")

function adddata(){
    if(input.value===""){
        alert("wite something to list")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value
        list.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value=" "
    savedata()

}
list.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
})
function savedata(){
    localStorage.setItem(data,list.innerHTML)
}
function showlist(){
    list.innerHTML=localStorage.getItem(data)
}
showlist()



