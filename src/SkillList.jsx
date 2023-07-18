import SkillListItem from "./SkillListItem";




export default function SkillList({skills}){

    const SkillListItems = skills.map((s)=> <SkillListItem origin = {s}/>)



    return(
        <ul className="padding-0"> 
        {SkillListItems}
        </ul>
    );


}