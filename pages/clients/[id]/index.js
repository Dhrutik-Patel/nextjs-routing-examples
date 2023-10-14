import { useRouter } from 'next/router';
import React from 'react';

const ClientPage = () => {
    const router = useRouter();

    return (
        <div>
            <h1>The Client Page</h1>
            <p>Here we will show a specific client...</p>
        </div>
    );
};

export default ClientPage;
