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

const TableCustom = styled(Table)`
    font-size:12px;
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
                <th>งบประมาณ (บาท)</th>
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
                        <td className="text-center">{idx + 1}</td>
                        <td>{name}</td>
                        <td className="text-center"> {budget_amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                        <td>{moment(start_at).locale('th').format('ll')}&nbsp;&ndash;&nbsp;{moment(end_at).locale('th').format('ll')}</td>
                        {this.props.showAction ? (<td className="text-center"><ProjectActionButton identifier={id} /></td>) : ''}
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
                <TableCustom responsive>
                    <thead>
                        <tr className="text-center">
                            {theadContent}  
                        </tr>
                    </thead>
                    <tbody>
                        {tbodyContent}
                    </tbody>
                </TableCustom>
            </Fragment>
        )
    }
}

export default ListProjectClub