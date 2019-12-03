import React from 'react';
import {
    Link
} from "react-router-dom";
import {Card, Tag, Typography} from "antd";
const { Title } = Typography;


function ProjectItem(props) {
    return (
        <Card>
            <Title level={3}><Link to={'project/' + props.id}>{props.header}</Link></Title>
            <p>{props.description}</p>
            <div>
                {props.tags.map((item, idx) =>
                    <Tag color={props.colors[idx]} key={idx}>{item}</Tag>
                )}
            </div>
        </Card>
    );
}

export default ProjectItem;
