const table = document.getElementById("tasktable")
const button = document.getElementById("taskbutton")
const input = document.getElementById("inputtask")
const binimage = "dustbin.png";
const edittextimage = "edit.png";
let currenttaskcell = null;

button.addEventListener("click", function(){
 if (currenttaskcell !== null){
    currenttaskcell.textContent = input.value;
    currenttaskcell = null;
    input.value = "";
    return;
 }






    const row = document.createElement("tr");
    
    const taskcell = document.createElement("td");
    taskcell.textContent = input.value;
    const datecell = document.createElement("td");
    datecell.textContent = new Date().toLocaleDateString("en-GB");
    
    const checkcell = document.createElement("td")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    checkbox.addEventListener("change",function (){
     if (checkbox.checked){
        taskcell.style.textDecoration = "line-through"
     }
     else {
        taskcell.style.textDecoration = ""
     }





    });
    
    
    
    
    const deletecell = document.createElement("td");
    const deletebutton = document.createElement("button");

    
    const deleteimage = document.createElement("img");
    deleteimage.src = binimage;
    deleteimage.width = 35;
    deleteimage.height = 50;
    
    deletebutton.addEventListener("click", function(){
        row.remove();
    });
    const editcell = document.createElement("td");
    const editbutton = document.createElement("button");
    const editimage = document.createElement("img");
    editimage.src = edittextimage;
    editimage.width = 35;
    editimage.height = 50;
   

    
    editbutton.addEventListener("click", function(){
        input.value = taskcell.textContent;
        currenttaskcell = taskcell;

    });
      input.value = "";


    
    
    
    row.appendChild(taskcell);
    row.appendChild(datecell);
    row.appendChild(checkcell);
    checkcell.appendChild(checkbox);
    deletebutton.appendChild(deleteimage);
    deletecell.appendChild(deletebutton);
    row.appendChild(deletecell);
    editbutton.appendChild(editimage);
    editcell.appendChild(editbutton);
    row.appendChild(editcell);
    table.appendChild(row);
})
 
