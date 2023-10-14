import Link from 'next/link';
import React from 'react';

const ClientsPage = () => {
    const clients = [
        { id: 'max', name: 'Maximilian' },
        { id: 'john', name: 'John Doe' },
    ];

    return (
        <div>
            <h1>The Clients Page</h1>
            <p>Here we will show a list of clients...</p>

            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link
                            href={{
                                pathname: '/clients/[id]',
                                query: { id: client.id },
                            }}
                        >
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientsPage;
