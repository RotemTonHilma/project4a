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
    };
  console.log(currentStyle);


  const colorArr = ["hotpink", "magenta", "mistyrose", "plum"];
<<<<<<< HEAD
  const fontStyleArr = ["serif", "sans-serif", "Courier New", "Times New Roman"];
  const fontSizeArr = [12,  16,  20,  28,  36];
=======
  const fontStyleArr = ["serif", "sans-serif", "fantasy", "monospace"];
  const fontSizeArr = [12, 16, 20, 28, 36];
>>>>>>> c299c1ea85be96df672c353ecb1643b0ef144f00


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
      <div id="size">
        <h1>size</h1>
        {fontSizeArr.map((size, index) => {
          return <button key={index} onClick={() => currentStyle.fontSize = size}>{size}</button>;
        })}
      </div>
      <div id="font">
        <h1>font</h1>
        {fontStyleArr.map((style, index) => {
          return <button key={index} onClick={() => currentStyle.fontFamily = style}>{style}</button>;
        })}
      </div>

      <div id="color">
        <h1>color</h1>
        {colorArr.map((color, index) => {
          return <button key={index} onClick={() => currentStyle.color = color}>{color}</button>;
        })}
      </div>
      <div id="special"></div>
    </div>

  </div>);
};
export default App
