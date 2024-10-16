let ele=document.getElementById("area");
let lis=document.getElementById("item")
let itm=document.createElement("div")
itm.setAttribute("id","inner")
lis.appendChild(itm)
function tas(){
   if (ele.value==""){
      alert("ENTER ANY TEXT");
   }
   else{
   let it=document.createElement("p");
    itm.appendChild(it);
    it.innerHTML=ele.value 
    
    let rem=document.createElement("span");
    it.appendChild(rem);

    rem.innerHTML="❌";
    rem.style.cursor = "pointer";

    rem.addEventListener("click", function() {
      itm.removeChild(it); 
  });

   ele.value="";
   }
   

}






