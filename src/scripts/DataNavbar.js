import React, { Fragment, Component } from 'react'

export const Infer = {
    topic: "เสนอโครงการ",
    topic_path: "#",
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

export const Offer = {
    topic: "สรุปโครงการ",
    topic_path: "#",
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

export const AboutClub = {
    topic: "ข้อมูลชมรม",
    topic_path: "#",
    sub: []
}
