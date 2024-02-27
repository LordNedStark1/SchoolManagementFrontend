import React, {useEffect, useState} from "react";

import SelectItems from "../reuseables/SelectItems";
import Date from "../reuseables/Date";
import {FiUpload} from "react-icons/fi";
import ReuseableButton from "../reuseables/ReuseableButton";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/ReduxStore/Store";
import {cohortState, saveCohort} from "@/ReduxStore/slice/CreateCohortFormSlice";
import DragAndDropFile from "../reuseables/DragAndDropFile";
import axios from "axios";
import { baseUrl, viewAllProgram } from "@/assets/urls/Urls";


function CreateCohortForm({open}) {
    const dispatch = useDispatch < AppDispatch > ();
    const [programs, setPrograms] = useState([]);
    const [form,
        setForm] = useState < cohortState > ({
        cohortName: "",
        description: "",
        program: "",
        startDate: "",
        endDate: "",
        file: ""
    });
    async function getPrograms  () {
        const url =baseUrl + viewAllProgram
        try{
         const response =await axios.get(url, {
            headers : {
                'Content-Type' : "application/json",
            }
         })
         if(response.status == 200){
            const data = response.data;
            console.log(data);
            
            setPrograms(data)
         }
        }catch(error){
            console.log(error)
        }
         
      }
      async function submitForm  () {
        const url =baseUrl + '/api/v1/school/createCohort'
        try{
         const response =await axios.get(url, {
            headers : {
                'Content-Type' : "application/json",
            }
         })
         if(response.status == 200){
            const data = response.data;
            console.log(data);
            
            setPrograms(data)
         }
        }catch(error){
            console.log(error)
        }
         
      }
     
    useEffect(() => {
        console.log( getPrograms());
      }, []);
    const handleFormChange = (e : any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const onCreateCohort = () => {
        // console.log(form);

        dispatch(saveCohort(form));
    };
    const dragOverHandler : React.DragEventHandler < HTMLDivElement > = (event) => {
        event.preventDefault();
        // Your drag over handler logic here
    };
    function dropHandler(ev) {
        ev.preventDefault();
        console.log(ev.dataTransfer.files);

        // if (ev.dataTransfer.items) {   // Use DataTransferItemList interface to
        // access the file(s)   [...ev.dataTransfer.items].forEach((item, i) => {     //
        // If dropped items aren't files, reject them     if (item.kind === "file") {
        // const file = item.getAsFile();       console.log(`… file[${i}].name =
        // ${file.name}`);     }   }); } else {   // Use DataTransfer interface to
        // access the file(s)   [...ev.dataTransfer.files].forEach((file, i) => {
        // console.log(`… file[${i}].name = ${file.name}`);   }); }
    }

    return (
        <div>
            <div className=" flex  justify-between w-80 items-center px-2  bg-white">
                <h4 className=" font-extrabold">Create a Cohort</h4>
                <button onClick={open}>X</button>
            </div>

            <div
                className=" max-h-[70vh] text-[14px] text-[#1E323F] overflow-y-auto transition ease-in-out delay-150 p-4 mt-12">
                <label>Cohort Name</label>
                <input
                    className="border border-teal-[#D0DCE4] mb-2 h-[30px] w-80 bg-white rounded "
                    title="Cohort"
                    id=""
                    name="cohortName"
                    onChange={handleFormChange}/>

                <label>Description</label>
                <textarea
                    className="border border-teal-[#D0DCE4]  h-18 rounded mb-3 w-80  bg-white "
                    title="Cohort Name"
                    id=""
                    name=""
                    onChange={handleFormChange}></textarea>

                <label>Program</label>
                <br/>

                <SelectItems
                    values={programs}
                    selectStyle={" rounded-md w-80 h-12 border border-teal-[#D0DCE4] bg-white"}/>
                <div className="flex mt-2 mb-3">
                    <Date
                        title={"Start Date"}
                        dateStyle={"mt-2 border border-teal-[#D0DCE4] "}
                        id="start"
                        name="startDate"
                        min="2024-03-01"
                        max="2025-12-31"
                        onChange={handleFormChange}/>
                    <Date
                        title={"End Date"}
                        dateStyle={"mt-2 border border-teal-[#D0DCE4] "}
                        id="end"
                        name="endDate"
                        min="2024-03-01"
                        max="2026-12-31"
                        onChange={handleFormChange}/>
                </div>
                <label>Add a cohort Avatar</label>
                <br/>

                <DragAndDropFile dropHandler={dropHandler} dragOverHandler={dragOverHandler}/>
                <span>You can do this later.</span>

                <div className="ml-[8.5vw] mt-3">
                    <ReuseableButton
                        disabled={false}
                        title={"Cancel"}
                        buttonStyle={"border border-[#008EEF] p-2 rounded-xl"}
                        onClickFunction={() => {}}/>
                    <ReuseableButton
                        disabled={false}
                        buttonStyle={"bg-[#008EEF] text-white rounded p-2 ml-3 w-22 disabled:opacity-40"}
                        title={"Create Cohort"}
                        onClickFunction={submitForm}/>
                </div>
            </div>
        </div>
    );
}

export default CreateCohortForm;
