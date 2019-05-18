import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ListProjectClub extends Component {
    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อโครงการที่ผ่านการพิจารณางบ</th>
                        <th>งบประมาณที่ขอไว้</th>
                        <th>ช่วงเวลาดำเนินโครงการ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>..ใช้ลูปเดะมาต่อ...</td>
                        <td>...</td>
                        <td>.....</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default ListProjectClub