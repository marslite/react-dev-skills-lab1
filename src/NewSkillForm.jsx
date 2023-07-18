import "./NewSkillForm"

import "./NewSkillForm.css"

export default function NewSkillForm(){
    return(
        <form className="NewSkillForm" action="submit">
            <label id="name"> <b>Skill</b> 
                <input placeholder="Insert Skill" />
                </label>

            <label id="level"> <b>Level</b> 
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </label>
            <button>ADD SKILL</button>
        </form>
    );

}