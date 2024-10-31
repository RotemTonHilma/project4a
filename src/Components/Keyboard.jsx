function Keyboard({ textArr, setTextArr, currentStyle, language }) {
    let letterArr;
    switch (language) {
        case "English": {
            letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "space", "enter"];
            break;
        }
        case "עברית": {
            letterArr = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת", "space", "enter"];
            break;
        }
    }

    function createLetterObj(letter, size, font, color) {
        return {
            letter,
            size,
            font,
            color,
        }
    }

    function handleLetterClick(letter, color, font, size) {
        let nextLetter = letter === "space" ? " " : letter;
        setTextArr(prevArr => {
            return [...prevArr, createLetterObj(nextLetter
                , size, font, color
            )]
        }
        );
    }

    return (
        <>
            {letterArr.map((letter) => {
                return <button key={letter} onClick={() => handleLetterClick(letter, currentStyle.color, currentStyle.fontFamily, currentStyle.fontSize)}>{letter}</button>
            })}
        </>
    );
}

export default Keyboard;