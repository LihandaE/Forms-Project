import React, { useState, useEffect } from "react";


export default function PageOne() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const filled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsValid(filled);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
    <div className="w-full max-w-3xl bg-white border border-red-200 rounded-xl shadow-lg p-8">
    <h2 className="text-3xl font-bold text-red-700 mb-2">
          Patient Personal Details
    </h2>
    <p className="text-gray-600 mb-6">
          Please fill in all required personal information
    </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          <input className="input" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} />

          <input className="input" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
          <input className="input" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />

          <input className="input" type="date" name="dob" value={formData.dob} onChange={handleChange} />

          <select className="input" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <select className="input" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
            <option value="">Marital Status</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>

          <input className="input" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} />

          <input className="input" name="emergencyName" placeholder="Emergency Contact Name" value={formData.emergencyName} onChange={handleChange} />
          <input className="input" name="emergencyRelationship" placeholder="Emergency Contact Relationship" value={formData.emergencyRelationship} onChange={handleChange} />
          <input className="input" name="emergencyPhone" placeholder="Emergency Contact Phone Number" value={formData.emergencyPhone} onChange={handleChange} />
        </form>

        <div className="mt-6 text-sm">
          <span className={isValid ? "text-green-600" : "text-red-600"}>
            {isValid ? "All required fields completed" : "Please complete all fields"}
          </span>
        </div>
      </div>

      {}
    </div>
  );
}
