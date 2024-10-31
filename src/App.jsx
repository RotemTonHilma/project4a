import { useState } from 'react';
import Keyboard from './Components/Keyboard';

function App() {
    const [textArr, setTextArr]=useState([]);
    let styleOverride = false
    let currentStyle = textArr.length===0 ?{
        fontFamily: "serif",
        fontSize: 20,
        color:"hotpink"
    }:
    {
        fontFamily:textArr[-1].font,
        fontSize:textArr[-1].size,
        color:textArr[-1].color
    };
    let colorArr =["hotpink", "magenta", "mistyrose", "plum"]
    let fontStyleArr =["Arial, sans-serif", "Georgia, serif", "Courier New, monospace", "Times New Roman, serif"];
    let fontSizeArr = [12, 16, 20, 28, 36];


    return (<div>

    <main id="textbox">{textArr.map(({letter, color, font, size},index)=>{
        return <span key={index} 
                    style={!styleOverride?{color, fontSize: size, fontFamily: font}
                    :null}>
            {letter}
            </span>
    })}
    </main>

    <div id="allButtons">
        <div id="keyboard"> <Keyboard textArr={textArr} setTextArr={setTextArr} currentStyle={currentStyle}/> </div>
        <div id="languages"></div>
        <div id="size">
        {fontSizeArr.map((size, index)=>{
                return <button key={index} onClick={()=>currentStyle.fontSize=size}>{size}</button>;
            })}
        </div>
        <div id="font">
        {/* {colorArr.map((color, index)=>{
                return <button key={index} onClick={()=>currentStyle.color=color}>{color}</button>;
            })} */}
        </div>
        <div id="special"></div>
        <div id="color">
            {colorArr.map((color, index)=>{
                return <button key={index} onClick={()=>currentStyle.color=color}>{color}</button>;
            })}
        </div>
    </div>

    </div>);
}

export default App
