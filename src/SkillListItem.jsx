import "./SkillListItem.css"
import { useState } from "react";

export default function SkillListItem({origin}){


    console.log(origin, "<-- Origin")
    return(
        
        <li className="SkillListItem"> {origin.name} <span className="level">{origin.level }</span></li>
    );
}