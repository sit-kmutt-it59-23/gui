import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import Sidebar from 'components/Sidebar';

const Index = () => {
    return (
        <DefaultLayout sidebar={<Sidebar />}>
            <p>something</p>
        </DefaultLayout>
    );
};

export default Index;