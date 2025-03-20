import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.config.js";

import { initializeApp } from "firebase/app";

const GetInternship = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [jobRole, setJobRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const fetchInternships = async () => {
    const internshipsCollection = query(collection(db, "Internships"));
    const querySnapshot = await getDocs(internshipsCollection);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setInternships([...internships, doc.data()]);
      // console.log(internships);
    });

    // try {
    //   console.log("Fetching internships from Firestore...");
    //   const internshipsCollection = collection(db, "internships");
    //   const querySnapshot = await getDocs(internshipsCollection);

    //   if (querySnapshot.empty) {
    //     console.warn("No internships found in Firestore.");
    //   }

    //   const fetchedData = querySnapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));

    //   setInternships(fetchedData);
    //   setFilteredInternships(fetchedData);
    //   console.log("Fetched internships:", fetchedData);
    // } catch (error) {
    //   console.error("Error fetching internships:", error);
    // }

    // Get a database reference to our posts
  };
  useEffect(() => {
    fetchInternships();
  }, [])

  // Filter internships based on selected criteria
  const applyFilters = () => {
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
  };

  // Reset filters
  const clearFilters = () => {
    setJobRole("");
    setJobType("");
    setLocation("");
    setExperience("");
    setFilteredInternships(internships);
  };

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

        <button className="custom-button bg-[#566730]" onClick={applyFilters}>
          Search
        </button>
        <button
          className="custom-button bg-[#DCBE82] text-[#566730]"
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>

      {/* Internship Listings */}
      <div className="w-full max-w-4xl">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <div key={internship.id} className="internship-card">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#566730]">
                  {internship.role} - {internship.company}
                </h2>
                <span className="text-gray-500 text-sm">
                  Posted {internship.posted}
                </span>
              </div>

              <p className="text-gray-700">
                {internship.type} • {internship.experience} •{" "}
                {internship.location}
              </p>

              {/* Skills */}
              <div className="mt-3 flex flex-wrap gap-2">
                {internship.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="apply-button">Apply</button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">
            internships available at the moment.
          </p>
        )}
      </div>

      {/* Job Cards Section */}
      <JobCards />
    </div>
  );
};

// Job Cards Component
const JobCards = () => {
  const jobListings = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Amazon",
      type: "Full Time",
      experience: "Fresher",
      location: "In-Office",
      posted: "2 days ago",
      skills: ["JavaScript", "Next.js", "Tailwind CSS"],
    },
    {
      id: 2,
      role: "Backend Developer",
      company: "Google",
      type: "Full Time",
      experience: "1-2 Years",
      location: "Remote",
      posted: "5 days ago",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Microsoft",
      type: "Internship",
      experience: "Fresher",
      location: "Hybrid",
      posted: "1 week ago",
      skills: ["React", "Django", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFAEE] flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-[#566730] mb-6">
        Latest Job Openings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {jobListings.map((job) => (
          <div key={job.id} className="job-card">
            <h2 className="text-xl font-bold text-[#566730]">
              {job.role} - {job.company}
            </h2>
            <p className="text-gray-700">
              {job.type} • {job.experience} • {job.location}
            </p>
            <p className="text-gray-500 text-sm">Posted {job.posted}</p>

            {/* Skill Badges */}
            <div className="mt-3 flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>

            <button className="apply-button">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInternship;
