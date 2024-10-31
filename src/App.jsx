import { useState } from 'react';
import Keyboard from './Components/Keyboard';

function App() {
  const [textArr, setTextArr] = useState([]);

  const langArr = ["English", "עברית"];
  const [currentLang, setCurrentLang] = useState(langArr[0]);


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


  let [capsOverride, setCapsOverride] = useState(false);
  function toggleCapsOverride() {
    setCapsOverride(prev => !prev);
  }
  let [colorOverride, setColorOverride] = useState(false);
  function toggleColorOverride() {
    setColorOverride(prev => !prev);
  }


  const colorArr = ["hotpink", "magenta", "mistyrose", "plum", "peachpuff"];
  const fontStyleArr = ["serif", "sans-serif", "fantasy", "monospace"];
  const fontSizeArr = [12, 16, 20, 28, 36];

  function handlBackspace() {
    setTextArr(prevArr => prevArr.slice(0, prevArr.length - 1));
  }

  function handleChangeLang(l) {
    setCurrentLang(l);
  }


  return (<div>

    <main id="textbox">{textArr.map(({ letter, color, font, size }, index,) => {
      return (letter === "enter" ? <br key={index}></br>
        : <span key={index}
          style=
          {{ color, fontSize: size, fontFamily: font, ...(capsOverride && { textTransform: "uppercase" }), ...(colorOverride && { color: currentStyle.color }) }}>
          {letter}
        </span>)
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
        <div>
          <button onClick={toggleCapsOverride}> Caps all text</button>
          <button onClick={toggleColorOverride}> Color all text</button>
        </div>
      </div>
    </div>

  </div>);
};
export default App
