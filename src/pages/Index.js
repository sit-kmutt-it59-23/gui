import React from 'react'

import DefaultLayout from 'layouts/DefaultLayout'
import ShowBudgetClub from 'components/ShowBudgetClub'
import ClubName from 'components/ClubName'
import Sidebar from 'components/Sidebar'

const Index = () => (
    <DefaultLayout
        left={<Sidebar />}
        middle={<ClubName name="สโมสรนักศึกษาคณะเทคโนโลยีสารสนเทศ" />}
        right={<ShowBudgetClub />}
    />
)

export default Index;