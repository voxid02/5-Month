import React from "react";
import { useSelector } from "react-redux";

function Menu () {

const { menu } = useSelector (state => state)


    return (
        <ul className={ menu ? "activeMenu" : "hiddenmenu"}>
            <li>main Page</li>
            <li>About Page</li>
            <li>Contact Page</li>
        </ul>
    )
}

export default Menu