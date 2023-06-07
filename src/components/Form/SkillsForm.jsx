import React, { useState } from "react";
import Style from "src/components/css/Login.module.css";
import { subject } from "src/utils/subject";
const SkillsForm = ({ teachervalues, setTeachervalues }) => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
    setSkills([...skills, e.target.value]);
    // Update the teachervalues object with the subject
    setTeachervalues((prevValues) => ({
      ...prevValues,
      Subject: [...prevValues.Subject, e.target.value],
    }));
  };
  const handleRemoveSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));

    // Update the teachervalues object by removing the skill from the Subject array
    setTeachervalues((prevValues) => ({
      ...prevValues,
      Subject: prevValues.Subject.filter((_, i) => i !== index),
    }));
  };

  return (
    <>
      <div className={Style.formgroup} style={{ marginTop: "20px" }}>
        <select value={skill} onChange={handleSkillChange}>
          <option value="" hidden disabled>
            select...
          </option>
          {subject.map((data, i) => {
            return <option key={i}>{data}</option>;
          })}
        </select>
        <ul style={{ listStyleType: "none", padding: 0, margin: "20px" }}>
          {skills.map((skill, index) => (
            <li
              key={index}
              className="skillLabel"
              style={{
                display: "inline-block",
                marginRight: "5px",
                marginBottom: "5px",
                backgroundColor: "#0077B5",
                color: "#FFFFFF",
                borderRadius: "10px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onClick={() => handleRemoveSkill(index)}
            >
              {skill}
              <span className="removeButton" style={{ marginLeft: "5px" }}>
                &#10005;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillsForm;
