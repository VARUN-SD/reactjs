import React, { useState } from "react";

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,                   //state variable in class component
        };
    }
    componentDidMount(){
        console.log("Component Child Mounted");
    }
    render() {
        const {name,age}=this.props;
        const {count} = this.state;
        return (
            <div>
               <h1> Count={count}</h1>
               <button onClick={()=>
               {this.setState({
                count:count+1,
               });
               }}>Increment</button>
                <h1>Welcome {name}!</h1>
                <p>You age is {age} </p>
            </div>
        );
    }
};



export const Userr=(props)=>{
    const {name,mileage} = props;
    const [counter,setCounter]=useState(0);    //state variable in functional component
    return(
        <div className="userr">
            <h1>Counter={counter}</h1>
            <button onClick={()=>
            {setCounter(counter+1)
            }}>Increment</button>
            <h1>Bike-{name}</h1>
            <h2>Capacity-{mileage}</h2>
        </div>
    )
};