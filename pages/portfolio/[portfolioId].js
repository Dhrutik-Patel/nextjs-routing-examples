import { useRouter } from 'next/router';
import React from 'react';

const PersonalPortfolio = () => {
    const { query } = useRouter();

    return (
        <div>
            <h1>Portfolio Page with ID: {query.portfolioId}</h1>
        </div>
    );
};

export default PersonalPortfolio;
