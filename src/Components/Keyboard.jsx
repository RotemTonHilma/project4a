function Keyboard(){
    const letterArr=["a", "b","c"];

    function handleLetterClick(letter){
        console.log(letter);
    }

    return (
        <>
            {letterArr.map(letter=>{
                <button onClick={()=>handleLetterClick(letter)}>{letter}</button>
            })};
        </>
    );
}

export default Keyboard;