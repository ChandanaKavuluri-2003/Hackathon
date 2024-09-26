import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SponsorMatching = () => {
    const [learners, setLearners] = useState([]);

    useEffect(() => {
        const fetchLearners = async () => {
            try {
                const response = await axios.get('/api/learners'); // Replace with your API endpoint
                setLearners(response.data);
            } catch (error) {
                console.error('Error fetching learners:', error);
            }
        };
        fetchLearners();
    }, []);

    return (
        <div>
            <h2>Matching Learners</h2>
            <ul>
                {learners.map((learner) => (
                    <li key={learner.id}>
                        <h3>{learner.name}</h3>
                        <p>Goals: {learner.goals}</p>
                        <p>Desired Skills: {learner.desiredSkills}</p>
                        <p>Benefits: {learner.sponsorshipBenefits}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SponsorMatching;