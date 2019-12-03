import React from 'react';
import {Card, Tag, Typography} from "antd";
const { Title } = Typography;


function ProjectItem(props) {
    return (
        <Card>
            <Title level={3}><a href={'/' + props.id}>{props.header}</a></Title>
            <p>{props.description}</p>
            {/*<div>*/}
            {/*    {props.tags.map((item, idx) =>*/}
            {/*        <Tag color={props.colors[idx]} key={idx}>{item}</Tag>*/}
            {/*    )}*/}
            {/*</div>*/}
        </Card>
    );
}

export default ProjectItem;