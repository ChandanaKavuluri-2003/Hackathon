import React from 'react';

const ProgressTracking = ({ progressData }) => {
    return (
        <div>
            <h2>Progress Tracking</h2>
            <ul>
                {progressData.map((item, index) => (
                    <li key={index}>
                        <strong>{item.milestone}</strong>: {item.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProgressTracking;