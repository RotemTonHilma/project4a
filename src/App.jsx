import { useState } from 'react';
import Keyboard from './Components/Keyboard';

function App() {


    return <div>

    <main id="textbox"> </main>

    <div id="allButtons">
        <div id="keyboard"> <Keyboard /> </div>
        <div id="languages"></div>
        <div id="size"></div>
        <div id="font"></div>
        <div id="special"></div>
    </div>

    </div>
}

export default App
