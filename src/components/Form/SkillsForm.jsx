import React, { useState } from 'react';
import Style from 'src/components/css/Login.module.css';

const SkillsForm = ({ teachervalues, setTeachervalues }) => {
    const [ skill, setSkill ] = useState('');
    const [ skills, setSkills ] = useState([]);

    const handleSkillChange = (e) => {
        setSkill(e.target.value);
    };

    const handleSkillKeyPress = (e) => {
        if (e.key === 'Enter' && skill.trim() !== '') {
            setSkills([ ...skills, skill ]);
            setSkill('');

            // Update the teachervalues object with the subject
            setTeachervalues((prevValues) => ({
                ...prevValues,
                Subject: [ ...prevValues.Subject, skill ],
            }));
        }
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
        <div className={Style.formgroup} style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    value={skill}
                    onChange={handleSkillChange}
                    onKeyPress={handleSkillKeyPress}
                    placeholder="Enter a skill and press Enter"
                    style={{ marginRight: '10px', padding: '5px' }}
                />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="skillLabel"
                        style={{
                            display: 'inline-block',
                            marginRight: '5px',
                            marginBottom: '5px',
                            backgroundColor: '#0077B5',
                            color: '#FFFFFF',
                            borderRadius: '10px',
                            padding: '5px 10px',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleRemoveSkill(index)}
                    >
                        {skill}
                        <span className="removeButton" style={{ marginLeft: '5px' }}>
                            &#10005;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsForm;
