import React from 'react';
import { Link } from "react-router-dom";
import {Button, Card, Col, Typography} from "antd";
const { Title } = Typography;


function MainPageItem(props) {
    return (
        <Col span={8}>
            <Card style={{marginBottom: '30px'}}>
                <Title level={3}><Link to={'project/' + props.id}>{props.header}</Link></Title>
                <p>{props.description}</p>

                <Button.Group>
                    <Button disabled={!props.prodUrl}><a href={props.prodUrl}>Production-сервер</a></Button>
                    <Button disabled={!props.devUrl}><a href={props.devUrl}>Staging-сервер</a></Button>
                    <Button disabled={!props.gitUrl}><a href={props.gitUrl}>GitLab</a></Button>
                </Button.Group>
            </Card>
        </Col>
    );
}

export default MainPageItem;
