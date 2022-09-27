import React,{useState} from "react";

class ClassCounter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.double = this.double.bind(this)
    }

    double(){
        this.setState({count: this.state.count + 2})
    }
    

    render(){
        return (
            <div>
                <p>Ниже типа класс</p>
                <h1>{this.state.count}</h1>
                <button onClick={this.double}>Plus 2</button>
            </div>
        )
    }
}

export default ClassCounter;