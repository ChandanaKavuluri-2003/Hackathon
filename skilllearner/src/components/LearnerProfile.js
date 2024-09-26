import React, { useState } from 'react';

const LearnerProfile = () => {
    const [profile, setProfile] = useState({
        name: '',
        goals: '',
        desiredSkills: '',
        sponsorshipBenefits: ''
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add API call to save profile to the backend
        console.log('Profile submitted:', profile);
    };

    return (
        <div>
            <h2>Create Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={profile.name} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="goals" 
                    placeholder="Your Goals" 
                    value={profile.goals} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="desiredSkills" 
                    placeholder="Desired Skills" 
                    value={profile.desiredSkills} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="sponsorshipBenefits" 
                    placeholder="Benefits of Sponsorship" 
                    value={profile.sponsorshipBenefits} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Submit Profile</button>
            </form>
        </div>
    );
};

export default LearnerProfile;