import React from 'react';
import Navbar from './components/Navbar';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  return (
    <div>
      <Navbar />
      <JobForm />
      <JobList />
    </div>
  );
}

export default App;
