import React from 'react'

import DefaultLayout from 'layouts/DefaultLayout';
import Sidebar from 'components/Sidebar';
import ShowBudgetClub from 'components/ShowBudgetClub';
import ListMyProjectClub from 'components/ListMyProjectClub';

const SelectProject = () => (
    <DefaultLayout
        left={<Sidebar />}
        middle={<ListMyProjectClub />}
        right={<ShowBudgetClub />}
    />
)

export default SelectProject