import React, { Component } from 'react';
import { Table } from 'reactstrap';


class ShowBudgetClub extends Component {
    render() {
        return (
            <Table responsive>
                    <thead>
                        <tr className="text-center">
                            <th colSpan="3">ปีงบประมาณ ...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>งบประมาณทั้งหมด</td>
                            <td>....</td>
                            <td>บาท</td>
                        </tr>
                        <tr>
                            <td>ใช้ไป</td>
                            <td>.....</td>
                            <td>บาท</td>
                        </tr>
                        <tr>
                            <td>คงเหลือ</td>
                            <td>........</td>
                            <td>บาท</td>
                        </tr>
                    </tbody>
            </Table>
        );
    }
}

export default ShowBudgetClub