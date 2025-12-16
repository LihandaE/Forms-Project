import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

export default function ThirdPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    complaint: "",
    onsetDate: "",
    painScale: 0,
    symptoms: [],
    previousTreatment: ""
  });

  const symptomsList = [
    "Fever",
    "Cough",
    "Headache",
    "Fatigue",
    "Nausea",
    "Chest Pain"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleSymptom = (symptom) => {
    setForm((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom]
    }));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl p-6 border border-red-700 rounded-lg">
        <h2 className="text-2xl font-bold text-red-700 mb-6">
          Medical Assessment
        </h2>

        {/* Chief Complaint */}
        <div className="mb-4">
          <label className="block text-red-700 font-semibold mb-1">
            Chief Complaint (Reason for visit)
          </label>
          <textarea
            name="complaint"
            value={form.complaint}
            onChange={handleChange} 
            className="w-full border border-red-700 rounded p-2"
            rows="3"
          />
        </div>

        {/* Date of Onset */}
        <div className="mb-4">
          <label className="block text-red-700 font-semibold mb-1">
            Date of Onset of Symptoms
          </label>
          <input
            type="date"
            name="onsetDate"
            value={form.onsetDate}
            onChange={handleChange}
            className="w-full border border-red-700 rounded p-2"
          />
        </div>

        {/* Pain Scale */}
        <div className="mb-4">
          <label className="block text-red-700 font-semibold mb-1">
            Pain Scale (0–10)
          </label>
          <input
            type="range"
            min="0"
            max="10"
            name="painScale"
            value={form.painScale}
            onChange={handleChange}
            className="w-full accent-red-700"
          />
          <p className="text-red-700 font-bold">
            Selected: {form.painScale}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="mb-4">
          <label className="block text-red-700 font-semibold mb-2">
            Current Symptoms Checklist
          </label>
          <div className="grid grid-cols-2 gap-2">
            {symptomsList.map((symptom) => (
              <label key={symptom} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.symptoms.includes(symptom)}
                  onChange={() => toggleSymptom(symptom)}
                  className="accent-red-700"
                />
                {symptom}
              </label>
            ))}
          </div>
        </div>

        {/* Previous Treatment */}
        <div className="mb-6">
          <label className="block text-red-700 font-semibold mb-1">
            Previous Treatment for Current Illness
          </label>
          <textarea
            name="previousTreatment"
            value={form.previousTreatment}
            onChange={handleChange}
            className="w-full border border-red-700 rounded p-2"
            rows="3"
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/second")}
            className="border border-red-700 text-red-700 px-6 py-2 rounded hover:bg-red-50"
          >
            Previous
          </button>

          <button
            onClick={() => navigate("/fourth")}
            className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}


