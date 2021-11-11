import React from "react";
import { Routes, Route } from "react-router-dom";

import Layouts from "./layouts";
import AutomaticBatch from "./pages/AutomaticBatch";

/**
 * 简单路由列表
 * @returns 
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<AutomaticBatch />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
