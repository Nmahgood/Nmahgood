let currentInput = "";
let isResultShown = false;

function handleClick(event){
    const clickedButton = event.target.innerText;


    if  (clickedButton === "="){
        calculate();

    } else if(clickedButton==="C"){
        clear()

    }else{
        appendInput(clickedButton);
    }

}


function appendInput(value){
    if (isResultShown){
        document.getElementById("display").value = "";
        isResultShown = false;

    }
    currentInput += value;
    document.getElementById("display").value = currentInput;

}

function clear(){
    currentInput = "";
    document.getElementById("display").value= currentInput;
}
 

function calculate(){
    try{
        currentInput = eval(currentInput).toString();
        document.getElementById("display").value = currentInput;
        isResultShown = true;


    }catch (error){
        document.getElementById("display").value = "Error";
    }
}
  