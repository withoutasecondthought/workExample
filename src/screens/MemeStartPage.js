import React, { useRef} from 'react';
import MainContent from "../elements/MainContent";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";


const MemeStartPage = () => {
    const val = useRef(null)
    const navigate = useNavigate()



    const clickHandler = () => {
        const answer = val.current.value
        if (answer.toString() === '123456') {
            navigate("/users")
        } else {
            alert("Чувак ты реально не можешь ввести просто число???")
        }
    }
    return (

        <div className="screenDefault">
            <MainContent className="memePage">
                <p className="memeHeader">Введите 123456</p>
                <input className="memeInput" ref={val} type="text" placeholder="Введите число"/>
                <Button onClick={clickHandler} text="Вход"/>

            </MainContent>
        </div>
    );
};

export default MemeStartPage;