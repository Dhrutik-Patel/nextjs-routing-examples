import { useRouter } from 'next/router';
import React from 'react';

const Blog = () => {
    const router = useRouter();

    return (
        <div>
            <h1>The Blog Page</h1>
            <p>Here we will show a specific blog...</p>
            <p>
                {router.query.slug?.map((slug, index) => (
                    <span key={index}>{slug} / </span>
                ))}
            </p>
        </div>
    );
};

export default Blog;
