function Keyboard() {
    const letterArr = ["a", "b", "c"];

    function handleLetterClick(letter) {
        console.log(letter);
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