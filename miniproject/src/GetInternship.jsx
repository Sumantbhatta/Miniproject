import { useState } from "react";

const GetInternship = () => {
  const [internships, setInternships] = useState([]);

  // Placeholder fetch function (replace with actual API call)
  const fetchInternships = async () => {
    // Example API fetch call (Replace with actual Naukri/Internshala API)
    const response = await fetch("https://api.example.com/internships");
    const data = await response.json();
    setInternships(data);
  };

  return (
    <div className="min-h-screen bg-[#FCFAEE] text-[#566730] flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold mb-6">Find Your Internship</h1>

      {/* Dropdowns Section */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <select className="p-3 border rounded-md bg-[#FCFAEE]">
            <option>Job Role</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
          </select>
          <select className="p-3 border rounded-md bg-[#FCFAEE]">
            <option>Job Type</option>
            <option>Full Time</option>
            <option>Internship</option>
          </select>
          <select className="p-3 border rounded-md bg-[#FCFAEE]">
            <option>Location</option>
            <option>Remote</option>
            <option>Bangalore</option>
          </select>
          <select className="p-3 border rounded-md bg-[#FCFAEE]">
            <option>Experience</option>
            <option>Fresher</option>
            <option>1+ Years</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={fetchInternships}
          className="w-full bg-[#DCBE82] text-[#566730] py-2 rounded-md font-semibold hover:bg-[#BFA76F] transition"
        >
          Search
        </button>
      </div>

      {/* Internship Results */}
      <div className="mt-6 w-full max-w-4xl">
        {internships.length > 0 ? (
          internships.map((job, index) => (
            <div
              key={index}
              className="bg-white text-[#566730] p-4 rounded-md shadow-md mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{job.title} - {job.company}</h3>
                <p className="text-sm text-gray-600">{job.type} • {job.experience} • {job.location}</p>
                <div className="flex gap-2 mt-2">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="bg-[#DCBE82] text-[#566730] px-2 py-1 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="bg-[#566730] text-white px-4 py-2 rounded-md hover:bg-[#455A32]">
                Apply
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No internships found.</p>
        )}
      </div>
    </div>
  );
};

export default GetInternship;
