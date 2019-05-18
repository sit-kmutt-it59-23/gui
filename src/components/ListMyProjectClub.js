import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TextBlack = styled.i`
    color: #000000;
    &:hover{
        color: #5F6B7A;
    }
`

class ListMyProjectClub extends Component {
    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อโครงการที่ผ่านการพิจารณางบ</th>
                        <th>งบประมาณที่ขอไว้</th>
                        <th>ช่วงเวลาดำเนินโครงการ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>..ใช้ลูปเดะมาต่อ...</td>
                        <td>...</td>
                        <td>.....</td>
                        <td><Link to="/form"><TextBlack className="fas fa-edit"/></Link></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default ListMyProjectClub