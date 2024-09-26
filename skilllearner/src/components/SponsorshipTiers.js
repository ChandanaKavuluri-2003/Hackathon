import React from 'react';

const SponsorshipTiers = () => {
    const tiers = [
        { level: 'Basic', benefits: 'Funding for a course' },
        { level: 'Premium', benefits: 'Mentorship and networking opportunities' },
        { level: 'Elite', benefits: 'Internship placements' },
    ];

    return (
        <div>
            <h2>Sponsorship Tiers</h2>
            <ul>
                {tiers.map((tier, index) => (
                    <li key={index}>
                        <h3>{tier.level}</h3>
                        <p>{tier.benefits}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SponsorshipTiers;