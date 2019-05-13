import React from 'react'

import DefaultLayout from 'layouts/DefaultLayout';
import Sidebar from 'components/Sidebar';
import ShowBudgetClub from 'components/ShowBudgetClub';
import ListProjectClub from 'components/ListProjectClub';

const Project = () => (
    <DefaultLayout
        left={<Sidebar />}
        middle={<ListProjectClub />}
        right={<ShowBudgetClub />}
    />
)

export default Project;