import React from 'react';
import LearnerProfile from './components/LearnerProfile';
import SponsorMatching from './components/SponsorMatching';
import ProgressTracking from './components/ProgressTracking';
import SponsorshipTiers from './components/SponsorshipTiers';

const App = () => {
    const progressData = [
        { milestone: 'Completed Course A', status: 'Achieved' },
        { milestone: 'Received Certificate B', status: 'In Progress' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Skill Learner Platform</h1>
            <LearnerProfile />
            <SponsorMatching />
            <ProgressTracking progressData={progressData} />
            <SponsorshipTiers />
        </div>
    );
};

export default App;