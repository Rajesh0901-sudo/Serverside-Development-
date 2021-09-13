var rect = require('./rectangle');

function solveRect(l,b){
    console.log ("Solving Rectangle for l= "+l+" b= "+b);
    rect(l,b,(err,rectangle)=>{
        if(err)
            console.log("Error : ",err.message);
        else{
            console.log("Perimeter for l= "+l+" b= "+b+ " is ="+rectangle.perimeter());
            console.log("Area for l= " + l + " b= " + b + " is =" + rectangle.area());
        }

    });
    console.log("this is outside the solverect")
};
solveRect(2,4);
solveRect(2, 3);
solveRect(0, 2);
solveRect(2, -4);