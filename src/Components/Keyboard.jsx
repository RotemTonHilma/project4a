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

    function handleLetterClick(letter, color, font, size){
        setTextArr(prevArr=>{
            console.log(currentStyle);
            return [...prevArr,createLetterObj(letter
            , size, font, color
        )]}
        );
    }

    return (
        <>
            {letterArr.map((letter) => {
                return <button key={letter} onClick={() => handleLetterClick(letter,currentStyle.color, currentStyle.fontFamily,currentStyle.fontSize)}>{letter}</button>
            })}
        </>
    );
}

export default Keyboard;