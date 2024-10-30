function Keyboard({textArr,setTextArr}){
    const letterArr=["a", "b","c"];

   function createLetterObj(letter, size=12, font="serif", color="blue"){
    return{
        letter,
        size,
        font,
        color,
    }
   }

    function handleLetterClick(letter){
        setTextArr(prevArr=>{
            return [...prevArr,createLetterObj(letter
            // , currentSize, currentFont, color
        )]}
        );
    }

    return (
        <>
            {letterArr.map(letter=>{
               return <button key={letter} onClick={()=>handleLetterClick(letter)}>{letter}</button>
            })}
            
        </>
    );
}

export default Keyboard;