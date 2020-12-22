import React from 'react';


const Square=()=>{

const sq=(n)=>{
    let  sumsquare=0;
    let sum=0;
    let i;
    for(i=1;i<=n;i++){
        sum=sum+i
        sumsquare=sumsquare+Math.pow(i,2)
        
    }
   
    document.write('sum of each:',sumsquare,"<br>");

    let sumsquared=Math.pow(sum,2)
        document.write('sum of all number:',sumsquared,"<br>")


   return sumsquared-sumsquare;

}
const total=()=>{
    var sum=sq(10);
    document.write("total Square Sum:",sum,"<br>");
}


return(
    <div className="square-box">
        <h1>Sum of Squared number{total()}</h1>
    </div>
);
}
export default Square;