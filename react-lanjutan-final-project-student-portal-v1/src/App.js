import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import AddStudent from './Routes/AddStudent';
import Student from './Routes/Student';
import EditStudent from './Routes/EditStudent';
import NotFound from './Routes/NotFound';

const App = () => {
    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/:id" element={<EditStudent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      );
};

export default App;
