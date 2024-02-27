import { useSelector } from "react-redux";
import Programs from "./displaySections/Programs";
import Learners from "./displaySections/Learners";
import Instructors from "./displaySections/Instructors";
import Cohorts from "./displaySections/Cohorts";


export function SideNavSelection() {

    const selectedButton = useSelector(state=> state.sideNavButton.buttonDisplay)

    const selection = ()=>{

        switch(selectedButton){
            case "Cohorts":
                return <Cohorts/>
            case "Programs":
                return <Programs/>
            case "Learners":
                return <Learners/>
            case "Instructors":
                return <Instructors/>
    
        }
    }
    


    return(
        <>
        {selection()}
        </>
    )
}