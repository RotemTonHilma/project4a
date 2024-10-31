import { useState } from 'react';
import Keyboard from './Components/Keyboard';
import Buttons from "./Components/Buttons";

function App() {
  const [textArr, setTextArr] = useState([]);

  const langArr = ["English", "עברית"];
  const [currentLang, setCurrentLang] = useState(langArr[0]);
  let [capsOverride, setCapsOverride] = useState(false);
  let [colorOverride, setColorOverride] = useState(false);

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

  return (<div>

    <main style={{ minHeight: "100px", maxWidth: "1000px", border: "1px solid pink", marginBottom: "20px" }} id="textbox">{textArr.map(({ letter, color, font, size }, index,) => {
      return (letter === "enter" ? <br key={index}></br>
        : <span key={index}
          style=
          {{ color, fontSize: size, fontFamily: font, ...(capsOverride && { textTransform: "uppercase" }), ...(colorOverride && { color: currentStyle.color }) }}>
          {letter}
        </span>)
    })}
    </main>

    <div id="keyboard">
      <Keyboard textArr={textArr} setTextArr={setTextArr} currentStyle={currentStyle} language={currentLang} />
    </div>

    <Buttons currentLang={currentLang} setCurrentLang={setCurrentLang}
      capsOverride={capsOverride} setCapsOverride={setCapsOverride}
      colorOverride={colorOverride} setColorOverride={setColorOverride}
      currentStyle={currentStyle}
      langArr={langArr}
      textArr={textArr} setTextArr={setTextArr}
    />

  </div>);
};
export default App
