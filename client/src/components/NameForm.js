import React, { useState } from 'react';
import { submitName, uploadAvatar } from '../api/api';
import './NameForm.css'

function NameForm() {
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await submitName(name);
      alert('Name submitted successfully!');
    } catch (error) {
      console.error('Error submitting name:', error);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    try {
      await uploadAvatar(file);
      alert('Avatar uploaded successfully!');
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  return (
<form onSubmit={handleSubmit} className="form-container">
  <div className="form-field">
    <label className="form-label">
      Name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
    </label>
  </div>
  <button type="submit" className="form-button">Submit</button>
  <div className="form-field">
    <label className="form-label">
      Upload Avatar:
      <input type="file" onChange={handleFileChange} className="form-file-input" />
    </label>
  </div>
</form>
  );
}

export default NameForm;
