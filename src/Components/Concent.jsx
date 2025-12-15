import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom'

function Concent() {
    //const navigate =useNavigate()

        const[formData,setFormData] =useState({
            insuranceProvider: "",
    policyNumber: "",
    insuredPerson: "",
    authorizationNumber: "",
    consentTreatment: false,
    consentPrivacy: false,
    dnrStatus: "",
    nextOfKin: "",
        });

        const handleChange =(e) =>{
            const {name,value,type,checked } =e.target
            setFormData((prev) =>({...prev,[name]: type==="checkbox" ?checked : value,
            })
        )
        };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
       <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4">
        <h2 className='text-red-600 font-bold'>Insurance and Consent</h2>
        <p >Page 4/5</p>
        <h3 className='font-bold'>Section A: Insurance Information</h3>

        <input type="text" name ="insuranceProvider" placeholder='Insurance provider' value={formData.insuranceProvider} onChange={handleChange} className='w-full border p-2 rounded' required />
        <input type="text" name ="insurancePerson" placeholder='Authorization' value={formData.authorizationNumber} onChange={handleChange} className='w-full border p-2 rounded' required/>

        <h3 className='font-bold'>Section B:Concent</h3>

        <label className='flex items-center gap-2'>
            <input type="checkbox" name='concentTreatment' checked ={formData.consentTreatment} onChange={handleChange} />
            concent for treatment
        </label>

        <label className='flex items-center gap-2'>
            <input type="checkbox" name='concentPrivacy' checked ={formData.consentPrivacy} onChange={handleChange} />
            privacy concent 
        </label>

        <select name="dnrStatus"value={formData.dnrStatus}onChange={handleChange}className="w-full border p-2 rounded"required>
          <option value="">Do you have a DNR?</option>
          <option value="yes">Yes</option>
          <option value="No">No</option>
          </select>

          <input type="text"name="nextOfKin"placeholder="Next of Kin Information"value={formData.nextOfKin}onChange={handleChange}className="w-full border p-2 rounded"required />

          <div className='flex gap-2 mt-4'>
            <button onClick={()=> navigate('/previous')} className='flex-1 bg-gray-400 text-white p-2 rounded'>Back</button>
            <button onClick={() =>navigate('/review')}  className="flex-1 bg-red-600 text-white p-2 rounded">Next</button>

          </div>
       </div>
    </div>
  )
}

export default Concent