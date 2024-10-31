function Buttons({ currentLang, setCurrentLang, capsOverride, setCapsOverride, colorOverride, setColorOverride, currentStyle, langArr, textArr, setTextArr }) {

    const colorArr = ["hotpink", "magenta", "mistyrose", "plum", "peachpuff"];
    const fontStyleArr = ["serif", "sans-serif", "fantasy", "monospace"];
    const fontSizeArr = [12, 16, 20, 28, 36];

    function handlBackspace() {
        setTextArr(prevArr => prevArr.slice(0, prevArr.length - 1));
    }

    function handleChangeLang(l) {
        setCurrentLang(l);
    }
    function toggleColorOverride() {
        setColorOverride(prev => !prev);
    }
    function toggleCapsOverride() {
        setCapsOverride(prev => !prev);
    }


    return (
        <>
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
            </div></>
    );
}

export default Buttons;