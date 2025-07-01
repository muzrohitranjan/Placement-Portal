import React, { useState } from 'react';

export default function JobForm() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Job Added: ${company} - ${role}`);
    setCompany("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit} style={{padding: "20px"}}>
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" required />
      <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" required />
      <button type="submit">Add Job</button>
    </form>
  );
}
