import React from 'react';
import Module from "../Modules/index";
import Status from "./Status";
import "./index.css"; // 确保你的CSS文件中有相关的样式

export default function Home() {
  return (
    <div className="d-flex flex-wrap">
      {/* 空白列移除，使用flex和响应式工具类调整布局 */}
      <div className="col-12 col-lg-10 pe-5">
        <Module />
      </div>
      {/* Status组件在小屏幕时隐藏 */}
      <div className="col-lg-2 d-none d-lg-block pe-3 pt-4">
        <Status />
      </div>
    </div>
  );
}