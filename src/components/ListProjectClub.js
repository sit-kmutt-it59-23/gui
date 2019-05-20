import React, { Children, Component, Fragment } from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/th';

import ProjectActionButton from 'components/ProjectActionButton';
import axiosInstance from 'scripts/Api';


const MonospaceFont = styled.span`
    font-family: monospace;
    font-size: 1.225rem;
`

class ListProjectClub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            error: null
        }
    }
    
    componentDidMount() {
        this.getData();
    }

    getData() {
        axiosInstance.get('/organizations/7/projects').then(response => {
            this.setState({
                data: response.data,
                isLoading: false
            });
        }).catch(error => {
            this.setState({
                error,
                isLoading: false
            });
        });
    }

    render() {
        const {data, isLoading, error} = this.state;
        const theadContent = (
            <Fragment>
                <th>ลำดับ</th>
                <th>ชื่อโครงการ</th>
                <th>งบประมาณ</th>
                <th>ระยะดำเนินการ</th>
                {this.props.showAction ? <th>การดำเนินการ</th> : null}
            </Fragment>
        )
        const theadContentCount = Children.toArray(theadContent)[0].props.children.length;
        let tbodyContent;

        if (isLoading) {
            tbodyContent = (
                <tr>
                    <td className="text-center" colSpan={theadContentCount}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">กำลังโหลด...</span>
                        </div>
                        <span className="ml-2">กำลังโหลด...</span>
                    </td>
                </tr>   
            );
        }
        else if (error) {
            tbodyContent = (
                <tr>
                    <td className="text-center text-muted" colSpan={theadContentCount}>
                        เกิดข้อผิดพลาดขณะที่กำลังโหลดข้อมูล โปรดลองอีกครั้งในภายหลัง
                    </td>
                </tr>
            )
        }
        else if (data.length > 0) {
            tbodyContent = data.map((datum, idx) => {
                const {id, name, budget_amount, start_at, end_at} = datum;
                return (
                    <tr key={id}>
                        <td>{idx + 1}</td>
                        <td>{name}</td>
                        <td className="text-right"><MonospaceFont>฿ {budget_amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</MonospaceFont></td>
                        <td>{moment(start_at).locale('th').format('ll')}&ndash;{moment(end_at).locale('th').format('ll')}</td>
                        {this.props.showAction ? (<td><ProjectActionButton identifier={id} /></td>) : ''}
                    </tr>
                );
            });
        }
        else {
            tbodyContent = (
                <tr>
                    <td className="text-center text-muted" colSpan={theadContentCount}>
                        ไม่พบโครงการที่พิจารณางบแล้ว
                    </td>
                </tr>
                
            );
        }

        return (
            <Fragment>
                <Table responsive striped>
                    <thead>
                        <tr>
                            {theadContent}  
                        </tr>
                    </thead>
                    <tbody>
                        {tbodyContent}
                    </tbody>
                </Table>
            </Fragment>
        )
    }
}

export default ListProjectClub