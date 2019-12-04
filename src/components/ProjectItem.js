import React, {useEffect, useState} from 'react';
import {Form, Input, Button, Affix, Row} from 'antd'
import {Card, Typography} from "antd";
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";
import axios from "axios";

const { TextArea } = Input;
const { Title } = Typography;

function ProjectItem() {
    let history = useHistory();
    let { projectId } = useParams();

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [prodUrlValue, setprodUrlValue] = useState('');
    const [devUrlValue, setDevUrlValue] = useState('');
    const [gitUrlValue, setGitUrlValue] = useState('');

    const [isReady, setIsReady] = useState(false);
    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:4000/project/${projectId}`)
            .then(res => {
                resultHandler(res.data[0]);
                setIsReady(true);
            });

        // axios.post("http://localhost:4000/post", {
        //     id: '123',
        //     title: '123',
        //     description: '123',
        //     prod_link: '123',
        //     dev_link: '123',
        //     git_link: '123',
        //     other: '123',
        // }).then(res => console.log(res.data));

    }, []);

    // let project = dbprojects.find(project => project.id === parseInt(id, 10));

    const [isFormTouched, setFormTouched] = useState(false);

    function resultHandler(result) {
        setTitleValue(result.title);
        setDescriptionValue(result.description);
        setprodUrlValue(result.prod_link);
        setDevUrlValue(result.dev_link);
        setGitUrlValue(result.git_link);
    }

    function handleSubmit(event) {
        event.preventDefault();
        project.title = titleValue;
        project.description = descriptionValue;
        project.prodUrl = prodUrlValue;
        project.devUrl = devUrlValue;
        project.gitUrl = gitUrlValue;

        history.push('/');
    }

    function handleChange(event) {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'titleValue') {
            setTitleValue(value);
        } else if (name === 'descriptionValue') {
            setDescriptionValue(value);
        } else if (name === 'prodUrlValue') {
            setprodUrlValue(value);
        } else if (name === 'devUrlValue') {
            setDevUrlValue(value);
        } else if (name === 'gitUrlValue') {
            setGitUrlValue(value);
        }
        setFormTouched(true);
    }

    function homeButtonClicked() {
        history.push('/');
    }

    return (
        <Row gutter={30}>
            <Affix style={{position: 'absolute', zIndex: '1', right: 0,}} offsetTop='0'>
                <Button className="main-button" type="primary" shape="circle" size="large" onClick={homeButtonClicked} icon="rollback" />
            </Affix>
            {isReady &&
                <Card>
                    <Form onSubmit={handleSubmit} layout="horizontal">
                        <Form.Item label="Заголовок">
                            <Input name="titleValue" value={titleValue} onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item label="Описание">
                            <TextArea name="descriptionValue" value={descriptionValue} onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item label="Staging-сервер">
                            <Input name="prodUrlValue" value={prodUrlValue} onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item label="Production-сервер">
                            <Input name="devUrlValue" value={devUrlValue} onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item label="GitLab">
                            <Input name="gitUrlValue" value={gitUrlValue} onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" type="primary" block={true}
                                    disabled={!isFormTouched}>Сохранить</Button>
                        </Form.Item>
                    </Form>
                </Card>
            }
        </Row>
    )
}

export default ProjectItem;
