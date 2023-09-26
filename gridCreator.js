function changeColor()
{
    this.style.backgroundColor = "black";
}

function createGrid(cntnr, size)
{
    
    while((cntnr.hasChildNodes()))
    {
        cntnr.removeChild(cntnr.firstChild);
    }
    let flex1 = document.createElement("div");
    cntnr.appendChild(flex1);
    flex1.classList.add("flex1");
    for(let i = 0; i < size; i++)
    {
        let flex2 = document.createElement("div");
        flex1.appendChild(flex2);
        flex2.classList.add("flex2");
        for(let j = 0; j < size; j++){
            let flex3 = document.createElement("div");
            flex2.appendChild(flex3)
            flex3.classList.add("colorBox");
            flex3.addEventListener("mouseover", changeColor);
        }
    }

}

window.onload = doStuff;
var ctr;

function doStuff() {
    ctr = document.getElementById("theContainer");
    console.log(ctr)
    createGrid(ctr, 16)
}


function promptSize()
{
    let newSize = prompt("Enter size: ");
    createGrid(ctr, newSize)
}