import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config.js";

const GetInternship = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [jobRole, setJobRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const fetchInternships = async () => {
    try {
      const internshipsCollection = collection(db, "Internships");
      const querySnapshot = await getDocs(internshipsCollection);

      const internshipsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Fetched Internships:", internshipsData); // ✅ Debugging step

      setInternships(internshipsData);
      setFilteredInternships(internshipsData); // ✅ Initialize filtered list
    } catch (error) {
      console.error("Error fetching internships:", error);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  // ✅ Properly filters internships based on selected criteria
  useEffect(() => {
    let filtered = internships;

    if (jobRole) {
      filtered = filtered.filter((internship) =>
        internship.role.toLowerCase().includes(jobRole.toLowerCase())
      );
    }

    if (jobType) {
      filtered = filtered.filter((internship) => internship.type === jobType);
    }

    if (location) {
      filtered = filtered.filter(
        (internship) => internship.location === location
      );
    }

    if (experience) {
      filtered = filtered.filter(
        (internship) => internship.experience === experience
      );
    }

    setFilteredInternships(filtered);
  }, [jobRole, jobType, location, experience, internships]);

  return (
    <div className="min-h-screen bg-[#FCFAEE] flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-[#566730] mb-4">
        Get Latest Job Openings That Best Suit You
      </h1>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 bg-white p-4 rounded-md shadow-md mb-6 w-full max-w-4xl">
        <select
          className="custom-select"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
        >
          <option value="">Job Role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
        </select>

        <select
          className="custom-select"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
        </select>

        <select
          className="custom-select"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Location</option>
          <option value="Remote">Remote</option>
          <option value="In-Office">In-Office</option>
        </select>

        <select
          className="custom-select"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="">Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="1-2 Years">1-2 Years</option>
          <option value="3+ Years">3+ Years</option>
        </select>
      </div>

      {/* Internship Listings */}
      <div className="w-full max-w-4xl">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <div key={internship.id} className="internship-card">
              <h2 className="text-xl font-bold text-[#566730]">
                {internship.role} - {internship.company}
              </h2>
              <p className="text-gray-700">
                {internship.type} • {internship.experience} • {internship.location}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">
            No internships available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default GetInternship;
