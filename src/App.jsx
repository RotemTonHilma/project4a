import { useState } from 'react';
import Keyboard from './Components/Keyboard';

function App() {
    const [textArr, setTextArr]=useState([]);

    return (<div>

    <main id="textbox">{textArr.map(({letter},index)=>{
        return <span key={index}>{letter}</span>
    })}
    </main>

    <div id="allButtons">
        <div id="keyboard"> <Keyboard textArr={textArr} setTextArr={setTextArr}/> </div>
        <div id="languages"></div>
        <div id="size"></div>
        <div id="font"></div>
        <div id="special"></div>
    </div>

    </div>);
}

export default App
