function Keyboard({textArr,setTextArr, currentStyle}){
    const letterArr=["a", "b","c"];

   function createLetterObj(letter, size, font, color){
    return{
        letter,
        size,
        font,
        color,
    }
   }

    function handleLetterClick(letter){
        setTextArr(prevArr=>{
            console.log(currentStyle);
            return [...prevArr,createLetterObj(letter
            , currentStyle.currentSize, currentStyle.currentFont, currentStyle.currentColor
        )]}
        );
    }

    return (
        <>
            {letterArr.map((letter) => {
                return <button key={letter} onClick={() => handleLetterClick(letter)}>{letter}</button>
            })}
        </>
    );
}

export default Keyboard;