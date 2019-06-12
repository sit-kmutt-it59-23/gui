import React from 'react'

import DefaultLayout from 'layouts/DefaultLayout'
import Sidebar from 'components/Sidebar'
import ShowBudgetClub from 'components/ShowBudgetClub'
import ListProjectClub from 'components/ListProjectClub'

const breadcrumbData = [
    {
        "text": "หน้าแรก",
        "link": "/"
    },
    {
        "text": "โครงการ",
        "active": true
    }
]

const Projects = () => (
    <DefaultLayout
        breadcrumb={breadcrumbData}
        left={<Sidebar />}
        middle={<ListProjectClub />}
        right={<ShowBudgetClub />}
    />
)

export default Projects