import React from 'react'

import DefaultLayout from 'layouts/DefaultLayout'
import Sidebar from 'components/Sidebar'
import ShowBudgetClub from 'components/ShowBudgetClub'
import ListProjectClub from 'components/ListProjectClub'

const SelectProject = () => (
    <DefaultLayout
        left={<Sidebar />}
        middle={<ListProjectClub showAction />}
        right={<ShowBudgetClub />}
    />
)

export default SelectProject