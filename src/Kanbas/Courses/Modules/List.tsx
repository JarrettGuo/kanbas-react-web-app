import React, { useState } from "react";
import Database from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";

export default function ModuleList() {
  const { modules } = Database;
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);

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
        {modulesList.map((module) => (
          <li key={module._id} className="list-group-item mb-5" onClick={() => handleModuleClick(module._id)}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="py-2">
                <FaEllipsisV className="me-2 mb-2" />
                <h3 className="d-inline mb-0">{module.name}</h3> {/* 使用 d-inline 使 h3 与图标在同一行 */}
              </div>
              <span>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {/* 根据selectedModuleIds判断是否展开模块详细内容 */}
            {selectedModuleIds.has(module._id) && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
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
