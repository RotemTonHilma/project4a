function Keyboard({textArr,setTextArr, currentStyle}){
    const letterArr=["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];

    function createLetterObj(letter, size, font, color) {
        return {
            letter,
            size,
            font,
            color,
        }
    }

    function handleLetterClick(letter, color, font, size) {
        setTextArr(prevArr => {
            return [...prevArr, createLetterObj(letter
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