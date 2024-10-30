<<<<<<< HEAD
function Keyboard() {
    const letterArr = ["a", "b", "c"];

    function handleLetterClick(letter) {
        console.log(letter);
=======
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
>>>>>>> 4b8b0d76cc98f0dcf33c6b2e33de587ada3911dd
    }

    return (
        <>
<<<<<<< HEAD
            {letterArr.map((letter) => {
                return <button key={letter} onClick={() => handleLetterClick(letter)}>{letter}</button>
            })}
=======
            {letterArr.map(letter=>{
               return <button key={letter} onClick={()=>handleLetterClick(letter)}>{letter}</button>
            })}
            
>>>>>>> 4b8b0d76cc98f0dcf33c6b2e33de587ada3911dd
        </>
    );
}

export default Keyboard;