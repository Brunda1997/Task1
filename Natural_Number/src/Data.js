import React,{Component} from 'react';



class Data extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            data:''
        }
    }

handle=(e)=>{
    
    let num=parseInt(e.target.value);
    let i, data;
    this.setState({
        username:num,
        data:data
        
    })
    
            for( i=1;i<=num;i++){
               data=i;
          
        }
        alert(`${this.state.username} ${this.state.data}`)
}

submit=(e)=>{
    e.preventDefault()
    let num=parseInt(e.target.value);
    let i, data;
    this.setState({
        username:num,
        data:data
        
    })
    
            for( i=1;i<=num;i++){
               console.log(i);
          
        }
        alert(`${this.state.username} ${this.state.data}`)
    
}
render(){
    return(
        <form>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handle}/>

            </div>
            {/* <div>
                <button type="submit">Submit</button>
            </div> */}
            <p>{this.state.data}</p>
        </form>
    )
}
}

export default Data;