console.log(varVariable);

let globalVariable1 = 12; //global scope

let globalVariable2 = function () {
    console.log("inside the function",globalVariable1);

    let funVariable1 = "hello"

    let funVariable2 = function () {
        console.log("funVariable2 belseje");
        console.log(globalVariable1);
        console.log(funVariable1);

        let funInFunVariable1 = true;
        console.log(funInFunVariable1);

        let funInFunVariable2 = function(){
            console.log(funInFunVariable1)

        }
        funInFunVariable2();

    }

    funVariable2();

    console.log(funVariable1);

    if(funVariable1 === "hello"){
        var blockVariable1 = "bye"
    } else{
        /*console.log(blockVariable1); ez nem fog működni*/
    }


    console.log(blockVariable1);
}

globalVariable2(); //meghívom a globalVariable2 függvényt

var varVariable = 1;

let letVariable1;
console.log(letVariable1);

let letVariable2 = "variable 2";
console.log(letVariable2);

const constVariable = "Chiao";
//constVariable = "hello"
console.log(constVariable);

const constObj1 = {}; // új {} új objektumot hozz létre
//constObj1.key = "value";
//constObj1 = {key: "value"}
console.log(constObj1);


const globalVariable3 = function (parameter1, parameter2, parameter3){
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3);
    console.log(parameter3());
}
const globalVariable4 = "apple"

const globalVariable5 = function (){
    return "pear"
}

const globalVariable6 = function (){
    return "shoes"
}

globalVariable3(globalVariable5(), globalVariable4, globalVariable6);



const loadEvent = function (parameter1) {
    const rootElement = document.getElementById("root"); 
    console.log(rootElement);
    console.log(parameter1);
    rootElement.addEventListener("click", function (event){
        console.log(event.currentTarget);

        event.currentTarget.insertAdjacentHTML("beforeend", "Clicked")

        event.currentTarget.classList.toggle(`<span>Clicked <
        /span>`)
    })
    //console.log(globalVariable1);
}

window.addEventListener("load", loadEvent)

// scopeból van 1) blockscope, 2)functionscope, 3) globalscope 

//let-et akkor írunk ha a tartalom később változni fog, változhat. a var az ehhez hasonló

//const ha nem szeretném hogy bármikor is felülírják a tartalmat, fix legyen, 