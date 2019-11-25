import React from 'react';
import {Card, Icon, Tag, Typography} from "antd";
const { Title, Paragraph, Text } = Typography;


function ProjectItem(props) {
    return (
        <Card>
            <Title level={3}>{props.header}</Title>
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