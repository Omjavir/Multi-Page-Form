import React, { useEffect, useState } from 'react';
import { Page1, Page2, Page3 } from './RegisterPages';

const Register = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() =>{console.log('formData', formData)}, [formData])

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 formData={formData} handleFormChange={handleFormChange} />;
      case 2:
        return <Page2 formData={formData} handleFormChange={handleFormChange} />;
      case 3:
        return <Page3 formData={formData} handleFormChange={handleFormChange} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderPage()}
      <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
      <button onClick={nextPage} disabled={currentPage === 3}>Next</button>
    </div>
  );
};

export default Register;
