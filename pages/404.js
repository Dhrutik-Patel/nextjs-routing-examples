import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <h1>404 Page Not Found</h1>

            <p>
                Try<Link href='/'> going back</Link>.
            </p>
        </div>
    );
};

export default ErrorPage;
