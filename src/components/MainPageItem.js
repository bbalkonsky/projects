import React from 'react';
import {
    Link
} from "react-router-dom";
import {Card, Typography} from "antd";
const { Title } = Typography;


function MainPageItem(props) {
    return (
        <Card>
            <Title level={3}><Link to={'project/' + props.id}>{props.header}</Link></Title>
            <p>{props.description}</p>
        </Card>
    );
}

export default MainPageItem;
