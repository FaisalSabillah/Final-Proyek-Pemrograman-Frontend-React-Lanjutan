import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Select, Table, Thead,Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import "./student.css"

const Student = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [selectedFaculty, setSelectedFaculty] = useState('All');
    const [Loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchStudents();
    }, []);
  
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3001/student');
        const data = await response.json();
        setStudents(data);
        setFilteredStudents(data);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await fetch(`http://localhost:3001/student/${id}`, {
          method: 'DELETE',
        });
        setFilteredStudents(filteredStudents.filter((student) => student.id !== id));
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleFilterChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedFaculty(selectedValue);
  
      if (selectedValue === 'All') {
        setFilteredStudents(students);
      } else {
        const filteredData = students.filter((student) => student.faculty === selectedValue);
        setFilteredStudents(filteredData);
      }
    };
  
    if (Loading) {
      return <div><p>Loading ...</p></div>;
    } else {

    return (
        <div>
        <Navbar />
        <h1>All Students</h1>
        <Select value={selectedFaculty} onChange={handleFilterChange} data-testid="filter">
          <option value="All">All</option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
          </option>
        </Select>

        <Table id="table-student">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th data-testid="name">Full Name</Th>
              <Th data-testid="prody">Faculty</Th>
              <Th>Program Study</Th>
              <Th>Option</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredStudents.map((student, index) => (
              <Tr key={student.id} className="student-data-row">
                <Td>{index + 1}</Td>
                <Td>
                  <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                </Td>
                <Td>{student.faculty}</Td>
                <Td>{student.programStudy}</Td>
                <Td>
                  <Button
                    onClick={() => handleDelete(student.id)}
                    data-testid={`delete-${student.id}`}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Footer />
      </div>
    );
  };
};

export default Student;
