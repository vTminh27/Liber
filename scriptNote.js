var noteContainer2 = document.getElementsByClassName("noteContainer2")[0];
var noteContainer3 = document.getElementsByClassName("noteContainer3")[0];
var checkIcon = document.getElementById("check-Icon");
var xCircle = document.getElementById("x-Circle");
var i = 0;

xCircle.addEventListener("click", function(){
    typeNote();
})

checkIcon.addEventListener("click", function(){
    createNote();
})

function typeNote(){
    if(noteContainer3.style.display == "none"){
        noteContainer3.style.display = "block";
    }
    else{
        noteContainer3.style.display = "none";
    }
}

function createNote(){
    var noteText = document.getElementById("Text").value;
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML = noteText;

    node1.setAttribute("style", "width: 220px; height: 220px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)");
    
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);

    noteContainer2.insertAdjacentElement("beforeend", node0);

    node0.addEventListener("mouseenter", function(){
        node0.style.transform = "scale(1.1)";
    })

    node0.addEventListener("mouseleave", function(){
        node0.style.transform = "scale(1)";
    })

    node0.addEventListener("dblclick", function(){
        node0.remove();
    })
    
    document.getElementById("Text").value = '';
}

function margin(){
    var RandomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return RandomMargin[Math.floor(Math.random() * RandomMargin.length)];
}

function rotate(){
    var RandomRotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(8deg)"];

    return RandomRotate[Math.floor(Math.random() * RandomRotate.length)];
}

function color(){
    var RandomColors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];

    if(i > RandomColors.length - 1){
        i = 0;
    }

    return RandomColors[i++];
}