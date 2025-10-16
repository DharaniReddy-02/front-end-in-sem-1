import React, { useState, useEffect } from "react";
import "./App.css";

const StudentInfo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Add student data properly
  const student = {
    name: "Dharani",
    course: "B.Tech CSE",
    year: "2nd Year",
    college: "Kl university",
  };

  return (
    <div className={`student-container ${isMobile ? "vertical" : "horizontal"}`}>
      <div className="student-card"><strong>Name:</strong> {student.name}</div>
      <div className="student-card"><strong>Course:</strong> {student.course}</div>
      <div className="student-card"><strong>Year:</strong> {student.year}</div>
      <div className="student-card"><strong>College:</strong> {student.college}</div>
    </div>
  );
};

export default StudentInfo;
