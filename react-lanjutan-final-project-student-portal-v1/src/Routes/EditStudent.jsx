import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const EditStudent = () => {
    const Navigate = useNavigate();
    const { id } = useParams();
  
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
      fullname: '',
      profilePicture: '',
      address: '',
      phoneNumber: '',
      birthDate: '',
      gender: '',
      programStudy: '',
    });
  
    useEffect(() => {
      const fetchStudent = async () => {
        try {
          const response = await fetch(`http://localhost:3001/student/${id}`);
  
          if (response.ok) {
            const studentData = await response.json();
            setFormData(studentData);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
  
      fetchStudent();
    }, [id]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch(`http://localhost:3001/student/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
      } catch (error) {
        console.log(error);
      }
      Navigate("/students")
    };
  
    if (loading) {
      return <div><p>Loading ...</p></div>;
    }
  
    return (
        <div>
        <Navbar />
        <h1>Edit Student</h1>
        
        <img src={formData.profilePicture} alt="Profile Picture" />
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname">Full Name:</label>
            <Input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              data-testid="name"
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              data-testid="address"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <Input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              data-testid="phoneNumber"
              required
            />
          </div>
          <div>
            <label htmlFor="birthDate">Birth Date:</label>
            <Input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              data-testid="date"
              required
            />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              data-testid="gender"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="programStudy">Program Study:</label>
            <select
              id="programStudy"
              name="programStudy"
              value={formData.programStudy}
              onChange={handleInputChange}
              data-testid="prody"
              required
            >
              <option value="">Select Program Study</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Akuntansi">Akuntansi</option>
              <option value="Administrasi Publik">Administrasi Publik</option>
              <option value="Administrasi Bisnis">Administrasi Bisnis</option>
              <option value="Hubungan Internasional">Hubungan Internasional</option>
              <option value="Teknik Sipil">Teknik Sipil</option>
              <option value="Arsitektur">Arsitektur</option>
              <option value="Matematika">Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Informatika">Informatika</option>
            </select>
          </div>
          <Button type="submit" data-testid="edit-btn">Edit Student</Button>
        </form>
        <Footer />
      </div>
    );
};

export default EditStudent;
