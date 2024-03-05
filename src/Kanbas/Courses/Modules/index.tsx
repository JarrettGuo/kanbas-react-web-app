import ModuleList from "./List";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { useState } from "react";

export default function Modules() {
  const [showAddModule, setShowAddModule] = useState(false);
  const getMsg = (msg:boolean)=>{
    if(msg){
      setShowAddModule(!showAddModule);
    }
  }
  return (
    <div style={{minWidth:'540px'}}>
      <div className="d-flex flex-row-reverse border-1 border-gary border-bottom py-3 pt-5 me-2">
        <button className="btn btn-light head-button__AddItem border-black border-1"><BsThreeDotsVertical /></button>
        <button className="btn btn-danger head-button__Module text-white border-black border-1 me-2" onClick={()=>setShowAddModule(!showAddModule)}><FaPlus />Add Module</button>
        <button className="btn btn-light dropdown-toggle border-black border-1 me-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        <MdOutlinePublishedWithChanges className="text-success"/>PublishAll
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="/">link 1</a></li>
            <li><a className="dropdown-item" href="/">link 2</a></li>
            <li><a className="dropdown-item" href="/">link 3</a></li>
        </ul>
        <button className="btn btn-light head-button__ViewProgress border-black border-1 me-2">ViewProgress</button>
        <button className="btn btn-light head-button__CollapseAll border-black border-1 me-2">CollapseAll</button>
      </div>
      <ModuleList showAddModule={showAddModule} getMsg={getMsg} />
    </div>
  );
}
