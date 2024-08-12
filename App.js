import React from 'react';
import ReactDOM from 'react-dom/client';

const JsHead =()=>(<h1 id="heading">Namaste NS200 Rider🏍️</h1>);
const cost=176000;

const HeadingComponent=()=>(
    <div>
        <JsHead/>
        <JsHead></JsHead>
        {JsHead()}
        <h3>{cost}</h3>

    <h2>Namaste Anna❤️</h2>
    </div>
);

const Header=React.createElement("div",{className:"title"},
    [React.createElement("h1",{},"Im an h1"),
        React.createElement("h2",{},"Im an h2"),
        React.createElement("h3",{},"Im an h3")
    ]
);

const Header2=(
    <div className="title">
        <h1>Im an H1</h1>
        <h2>TS263330</h2>
        <h3>Im an H3</h3>
    </div>
);

const Manchodu=()=>(
    <h4>Manchodu ante Varun</h4>
);
const Header3=() => (
    <div className="title" style={{backgroundColor:"pink"}}>
        <h1 id="header3" style={{color:'red'}}>Im a goodboy</h1>
        <h2 className="title" style={{color:'blue'}}>I love NS</h2>
        <h3>NS loves petrol</h3>
        {Manchodu()}
    </div>
);

const Header4=()=>(
    <div className="title" style={{display:"flex" ,}}>
        <div className="logo">
        <img src="user-icon.png" alt="Logo Image" /></div>
        <div className="search-bar" >
            <input type="text" placeholder="Search..." />
        </div>
        <div className="user-icon">
            <img src="user-icon.png" alt="User Icon" />
        </div>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header4/>);
