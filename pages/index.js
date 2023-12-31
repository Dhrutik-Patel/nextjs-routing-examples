import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Next.js!</h1>
            <ul>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/blogs'>Blogs</Link>
                </li>
                <li>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link href='/clients'>Clients</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;
