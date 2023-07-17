
export default function NewSkillForm(){
    return(
        <form action="submit">
            <label> <b>Skill</b> 
                <input placeholder="Insert Skill" />
                </label>

            <label> <b>Level</b> 
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