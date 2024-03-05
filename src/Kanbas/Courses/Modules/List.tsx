import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";
import { useState } from "react";

export default function ModuleList({showAddModule, getMsg} : {showAddModule: boolean, getMsg: (msg: boolean) => void}) {
  
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const msg = true;

  // 使用Set初始化selectedModuleIds，表示可以有多个模块同时被选中
  const [selectedModuleIds, setSelectedModuleIds] = useState<Set<string>>(new Set());

  // 点击模块时的处理函数
  const handleModuleClick = (moduleId: string) => {
    setSelectedModuleIds((prevSelectedModuleIds) => {
      const newSelectedModuleIds = new Set(prevSelectedModuleIds);
      if (newSelectedModuleIds.has(moduleId)) {
        // 如果已经被选中，则从Set中移除，实现收缩效果
        newSelectedModuleIds.delete(moduleId);
      } else {
        // 如果未被选中，则添加到Set中，实现展开效果
        newSelectedModuleIds.add(moduleId);
      }
      return newSelectedModuleIds;
    });
  };


  
  return (
    <div className='wd-modules mt-4'>
      <ul className="list-group wd-modules">
        {
          showAddModule && (
            <li className="list-group-item clearfix">
              <div className="d-flex">
                <div className="flex-grow-1">
                  <div className="input-group mb-2">
                    <input type="text" className="form-control" value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>
                  </div>
                  <div className="input-group">
                    <textarea className="form-control" value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}></textarea>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center ms-2">
                  <button className="btn btn-primary mb-2" onClick={() => dispatch(updateModule(module))}>Update</button>
                  <button className="btn btn-danger" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                </div>
              </div>
            </li>
          )
        }
        {Array.isArray(moduleList) && moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item mt-5" onClick={() => handleModuleClick(module._id)}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="py-2">
                <FaEllipsisV className="me-2 mb-2" />
                <h3 className="d-inline">{module.name}</h3>
              </div>
              <span>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
                <div className="float-start">
                  <button className="btn btn-success me-3" onClick={() => { dispatch(setModule(module)); setSelectedModuleIds(new Set([module._id]));getMsg(msg)}}>
                    Edit
                  </button>
                  <button className="btn btn-danger me-3" onClick={(e) => {
                    e.stopPropagation(); // 阻止事件冒泡
                    const isConfirmed = window.confirm(`Are you sure you want to delete ${module.name} module?`);
                    if (isConfirmed) {dispatch(deleteModule(module._id));}}}>
                    Delete
                  </button>
                </div>
              </span>
            </div>
            {/* 根据selectedModuleIds判断是否展开模块详细内容 */}
            {selectedModuleIds.has(module._id) && (
                <ul className="list-group border-success border-2 border-start">
                  {module.lessons?.map((lesson: any) => (
                    <li key={lesson._id} className="list-group-item py-3">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}
