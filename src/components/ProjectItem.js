import React, { useEffect, useState } from 'react';
import {Input, Button, Affix, Row, Card} from 'antd'
import { Typography } from "antd";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import FormPage from "./FormPage";

const { TextArea } = Input;
const { Title } = Typography;

function ProjectItem() {
    let history = useHistory();
    let { projectId } = useParams();

    const [isReady, setIsReady] = useState(false);
    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:4000/project/${projectId}`)
            .then(res => {
                setProject(res.data[0]);
                setIsReady(true);
            });
    }, []);

    function homeButtonClicked() {
        history.push('/');
    }

    const titleElement = project.title ? <Title level={3}>{project.title}</Title> : '';
    const descriptionElement = project.description ? <p>{project.description}</p> : '';
    const prodLinkElement = project.prod_link ? <p><a href={project.prod_link}>Production-сервер</a></p> : '';
    const devLinkElement = project.dev_link ? <p><a href={project.dev_link}>Develop-сервер</a></p> : '';
    const gitLinkElement = project.git_link ? <p><a href={project.git_link}>GitLab</a></p> : '';

    return (
        <Row gutter={30}>
            <Affix style={{position: 'absolute', zIndex: '1', right: 0,}} offsetTop='0'>
                <Button className="main-button" type="primary" shape="circle" size="large" onClick={homeButtonClicked} icon="rollback" />
            </Affix>
            {isReady &&
                <Card>
                    {titleElement}
                    {descriptionElement}
                    {prodLinkElement}
                    {devLinkElement}
                    {gitLinkElement}
                </Card>
            }
        </Row>
    )
}

export default ProjectItem;
