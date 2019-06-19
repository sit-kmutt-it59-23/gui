import React from 'react'

import DefaultLayout from 'layouts/DefaultLayout'
import Sidebar from 'components/Sidebar'
import WrappedProjectProposalForm from 'components/Form'

const FormPage = () => (
    <DefaultLayout
        left={<Sidebar />}
        middle={<WrappedProjectProposalForm />}
        right=" "
    />
)

export default FormPage