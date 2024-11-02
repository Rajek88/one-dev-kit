// import React from 'react'
import { Route, Routes } from "react-router-dom";
import ToolList from "../pages/tools/ToolList";

const InternalRoutes = ({ selectedOS }: { selectedOS: string }) => {
  return (
    <Routes>
      <Route path="*" element={<ToolList selectedOS={selectedOS} />} />
      {/* <Route path="/projects" element={<Project />} /> */}
    </Routes>
  );
};

export default InternalRoutes;
