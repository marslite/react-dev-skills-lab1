import "./NewSkillForm"

import "./NewSkillForm.css"
import React, { useState } from "react";


export default function NewSkillForm({addSkill}){

    const [errorMessage, setErrorMessage] = useState('');

    const [newSkill, setNewSkill]= useState({
        name: '',
        level: 3
    });

    function handleChange(e){
        console.log("This is the target value ->",e.target.value);

        setNewSkill({
            ...newSkill,
            [e.target.name] : e.target.value 
        })
    }

    function handleSubmit(e){

        e.preventDefault();
        console.log("newSkill ->", newSkill);

        if(newSkill.name === '' || newSkill.level === ""){
            return setErrorMessage('You forgot to fill the form')
        }
        //addSkill here
        addSkill(newSkill);
        //Clearing out the error message if there is any
        setErrorMessage('');
        //After the insertion we clear out the form
        setNewSkill({
            name: '',
            level : 3
        })

    }



    return(
        <form className="NewSkillForm" onSubmit={handleSubmit}>
            <label id="name"> <b>Skill</b> 
                <input name="name" placeholder="Insert Skill" value={newSkill.name} onChange={handleChange}/>
                </label>

            <label id="level"> <b>Level</b> 
            <select name="level" value={newSkill.level} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            </label>
            <button type="submit" >ADD SKILL</button>
        </form>
    );

}