import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../Nav';
import Assignment1 from './a1';
import Assignment3 from './a3';
import Assignment2 from './a2';

export default function Labs() {
  return (
    <div className="container-fluid">
      <Nav />
      <Routes>
        <Route path="a1" element={<Assignment1 />} />
         <Route path="a2" element={<Assignment2 />} />
        <Route path="a3" element={<Assignment3 />} />
        <Route path="/" element={<Assignment3 />} />
      </Routes>
    </div>
  );
}
