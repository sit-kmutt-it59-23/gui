import React from 'react'

import DefaultLayout from 'layouts/DefaultLayout';
import Sidebar from 'components/Sidebar';
import ShowBudgetClub from 'components/ShowBudgetClub';
import Form from 'components/Form';

const FormPage = () => (
    <DefaultLayout
        left={<Sidebar />}
        middle={<Form />}
        right=" "
    />
)

export default FormPage