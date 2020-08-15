import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
    ThunderboltOutlined,
    FundOutlined,
    ReadOutlined
} from '@ant-design/icons';
import './index.css';

import { getToken, decodeToken } from 'services/auth';

function getActiveMenuItem(pathName) {
    switch(pathName) {
        case '/management':
            return 'management'
        case '/consulting':
            return 'consulting'
        case '/regulation':
        case '/regulation/add/new':
            return 'regulation'

        default:
            return null
    }
}
export default function Header() {

    const locationUrl = useLocation();

    const activeMenuItem = getActiveMenuItem(locationUrl.pathname);    

    const token = getToken();

    console.log("token", token)
    
    if (!token) {
        return null;
    }

    const userData = decodeToken(token);
    console.log("userData", userData)
    const allowViewManagement = userData.perfil === 'gestor';

    return (
        <header>
            <Menu
                className="menu-header"
                theme="dark"
                selectedKeys={[activeMenuItem]}
                mode="horizontal">
                    {
                        allowViewManagement && (
                            <Menu.Item key="management" icon={<FundOutlined />}>
                                <Link to="/management">
                                    Gestão Industrial
                                </Link>
                            </Menu.Item>
                        )
                    }
                <Menu.Item key="consulting" icon={<ThunderboltOutlined />}>
                    <Link to="/consulting">
                        Consultorias
                    </Link>
                </Menu.Item>
                <Menu.Item key="regulation" icon={<ReadOutlined />}>
                    <Link to="/regulation">
                        Normas Técnicas
                    </Link>
                </Menu.Item>
            </Menu>
            <div className="user-profile">
                { `João Silva - cargo: ${userData.perfil}` }
            </div>
        </header>
    )
}