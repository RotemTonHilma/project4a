import { useState } from 'react';
import Keyboard from './Components/Keyboard';

function App() {
  const [textArr, setTextArr] = useState([]);

  const langArr = ["English", "עברית"];
  const [currentLang, setCurrentLang] = useState(langArr[0]);
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


  const colorArr = ["hotpink", "magenta", "mistyrose", "plum"];
  const fontStyleArr = ["serif", "sans-serif", "fantasy", "monospace"];
  const fontSizeArr = [12, 16, 20, 28, 36];

  function handlBackspace() {
    setTextArr(prevArr => prevArr.slice(0, prevArr.length - 1));
  }

  function handleChangeLang(l) {
    setCurrentLang(l);
  }


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
      <div id="keyboard"> <Keyboard textArr={textArr} setTextArr={setTextArr} currentStyle={currentStyle} language={currentLang} /> </div>
      <div id="languages">
        {langArr.map((lang) => {
          return <button key={lang} onClick={() => handleChangeLang(lang)}>{lang}</button>;
        })}
      </div>
      <div id="spacing">
        <button onClick={handlBackspace}>BackSpace</button>
      </div>
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
      <div id="special">
        <h1>Special</h1>
      </div>
    </div>

  </div>);
};
export default App
