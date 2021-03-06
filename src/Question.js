import React, { useState } from 'react';
import { BsFillCaretUpFill, BsCaretDownFill } from "react-icons/bs";


const Questbox = ({question,answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return <div className='questbox'>
        <div className='closed'>
            <h2>{question}</h2>
            <button className='expandbutton' onClick={()=> setShowAnswer(!showAnswer)}>{showAnswer? <BsFillCaretUpFill/> : <BsCaretDownFill/> }</button>
        </div>
        {showAnswer && <p>{answer}</p>}
    </div>;
};

export default Questbox;