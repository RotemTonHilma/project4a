import { useState } from 'react';
import Keyboard from './Components/Keyboard';

function App() {
  const [textArr, setTextArr] = useState([]);
  let styleOverride = false;

  let currentStyle = textArr.length ?
    {
      fontFamily: textArr[textArr.length - 1].font,
      fontSize: textArr[textArr.length - 1].size,
      color: textArr[textArr.length - 1].color
    } :
    {
      fontFamily: "serif",
      fontSize: 20,
      color: "hotpink"
    }


  let colorArr = ["hotpink", "magenta", "mistyrose", "plum"];

  return (<div>

    <main id="textbox">{textArr.map(({ letter, color, font, size }, index) => {
      return <span key={index}
        style={!styleOverride ? { color, fontSize: size, fontFamily: font }
          : null}>
        {letter}
      </span>
    })}
    </main>

    <div id="allButtons">
      <div id="keyboard"> <Keyboard textArr={textArr} setTextArr={setTextArr} currentStyle={currentStyle} /> </div>
      <div id="languages"></div>
      <div id="size"></div>
      <div id="font"></div>
      <div id="special"></div>
      <div id="color">
        {colorArr.map((color, index) => {
          return <button key={index} onClick={() => currentStyle.color = color}>{color}</button>;
        })}
      </div>
    </div>

  </div>);
};
export default App
