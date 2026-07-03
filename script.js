let lists = document.getElementsByClassName("list");
let left = document.getElementById("left");
let right = document.getElementById("right");


for(list of lists){
   list.addEventListener("dragstart", function(e){
    let section = e.target;

    right.addEventListener("dragover", function(e){
        e.preventDefault();
    });

    right.addEventListener("drop", function(e){
        right.appendChild(section);
        section=null;
    });

    left.addEventListener("dragover", function(e){
        e.preventDefault();
    });

    left.addEventListener("drop", function(e){
        left.appendChild(section);
        section=null;

    });
   });
}