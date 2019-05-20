import React, { Component } from 'react';
import { ListGroup, } from 'reactstrap';
import styled from 'styled-components';

import NavbarPart from '../sections/NavbarPart'

const StyledListGroup = styled(ListGroup)`
    font-size : 12px;
    background-color:#d6d8db;
    border-radius:20px;
`

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const infer = {
            topic: "เสนอโครงการ",
            sub: [
                {
                    name: "โครงการที่ผ่านการพิจารณางบ",
                    path: "/projects"
                },
                {   
                    name: "กรอกแบบฟอร์มโครงการ",
                    path: "/selectProject"
                },
                {   
                    name: "ติดตามโครงการ",
                    path: "#"
                },
                {   
                    name: "แบบเสนอโครงการที่อนุมัติ",
                    path: "#"
                }
            ]
        }

        const offer = {
            topic: "สรุปโครงการ",
            sub: [
                {
                    name: "โครงการที่รอสรุปผล",
                    path: "#"
                },
                {   
                    name: "โครงการที่กำลังสรุปผล",
                    path: "#"
                },
                {   
                    name: "โครงการที่สรุปผลแล้ว",
                    path: "#"
                }
            ]
        }

        const aboutClub = {
            topic: "ข้อมูลชมรม",
            topic_path: "#",
            sub: []
        }

        return (
            <StyledListGroup>
                <NavbarPart menu={infer} />
                <NavbarPart menu={offer} />
                <NavbarPart menu={aboutClub} />
            </StyledListGroup>
        )
    }
}

export default Sidebar