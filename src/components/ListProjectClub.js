import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Empty, Icon, Menu, Table } from 'antd'
import moment from 'moment'
import 'moment/locale/th'
import axiosInstance from 'scripts/Api'

const { SubMenu } = Menu

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
        this.getData()
    }

    getData() {
        axiosInstance.get('/organizations/2d648fc3-10aa-4c9b-8e2d-f4d27b1b9caa/projects').then(response => {
            this.setState({
                data: response.data,
                isLoading: false
            })
        }).catch(error => {
            this.setState({
                error,
                isLoading: false
            })
        })
    }

    render() {
        const tableLocale = {
            emptyText: () => {
                if (this.state.error) {
                    return <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description="เกิดข้อผิดพลาดขณะกำลังโหลดข้อมูล โปรดลองอีกครั้งในภายหลัง" />
                }
                return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="ไม่มีข้อมูล" />
            }
        }

        const actionMenu = (project_id) => (
            <Menu>
                <SubMenu title="สร้าง">
                    <Menu.Item><Link to={`/projects/${project_id}/docs/1/create`}>การเสนอโครงการ</Link></Menu.Item>
                    <Menu.Item><Link to={`/projects/${project_id}/docs/2/create`}>การสรุปโครงการ</Link></Menu.Item>
                </SubMenu>
            </Menu>
        )

        const columns = [
            {
                title: 'ชื่อโครงการ',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a.name.localeCompare(b.name),
                render: (val) => val,
            },
            {
                title: 'งบประมาณที่ขอ',
                dataIndex: 'budget_amount',
                key: 'budget_amount',
                sorter: (a, b) => a.budget_amount - b.budget_amount,
                render: (val) => val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                align: 'right'
            },
            {
                title: 'วันที่ดำเนินโครงการ',
                dataIndex: 'start_at',
                key: 'start_at',
                sorter: (a, b) => moment(a.start_at).unix() - moment(b.start_at).unix(),
                render: (val) => moment(val).locale('th').format('ll'),
                align: 'center'
            },
            {
                title: 'วันที่สิ้นสุดโครงการ',
                dataIndex: 'end_at',
                key: 'end_at',
                sorter: (a, b) => moment(a.end_at).unix() - moment(b.end_at).unix(),
                defaultSortOrder: 'ascend',
                render: (val) => moment(val).locale('th').format('ll'),
                align: 'center'
            },
            {
                title: "การดำเนินการ",
                key: 'action',
                render: (val, item) => (
                    <Dropdown overlay={actionMenu(item.id)}>
                        <Link to="#">
                            เมนู <Icon type="right" />
                        </Link>
                    </Dropdown>
                ),
                align: 'center',
                fixed: 'right'
            }
        ]

        return (
            <div style={{ padding: 20}}>
                <Table
                    dataSource={this.state.data}
                    columns={columns}
                    rowKey={item => item.id}
                    locale={tableLocale}
                    loading={this.state.isLoading}
                    scroll={{ x: 700 }}
                    size="middle"
                />
            </div>
        )
    }
}

export default ListProjectClub