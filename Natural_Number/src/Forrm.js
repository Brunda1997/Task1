import React,{Component} from 'react';
import './Form.css';

class Form extends Component{
    
    constructor(props){
        super(props)
        this.state={
            num:''
            
        }
    }
   
        handleinputchange=(e)=>{
            
            let num=parseInt(e.target.value);
            let arr=[]; 
           
            for(let i=1;i<=num;i++){
                
               arr.push(i);
            }
          alert(arr);
        }
        
    render(){
        return(
            <div className="form">
                
                <h1>Natural Numbers</h1>
                    <p><input type="text" placeholder="Natural Number" name="num"onChange={this.handleinputchange}/></p>
            </div>
        )
    }
}

export default Form;