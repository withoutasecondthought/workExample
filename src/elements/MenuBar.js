import React from 'react';
import {useNavigate} from "react-router-dom";

const MenuBar = () => {
    const navigate = useNavigate()
    return (
        <div className="menuBar">
            <div onClick={() => navigate("/users")} className="menuItem wrapPole">
                Users
            </div>
            <div onClick={() => navigate("/todos")} className="menuItem wrapPole">
                Todo
            </div>
        </div>
    );
};

export default MenuBar;