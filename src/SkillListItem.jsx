
export default function SkillListItem({origin}){
    console.log(origin, "<-- Origin")
    return(
        
        <li> {origin.name + origin.level}</li>
    );
}