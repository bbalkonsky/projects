import React, {useEffect, useState} from 'react';
import {Form, Input, Button, Card, Affix, Row} from 'antd'
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

const { TextArea } = Input;

function FormPage() {
    let history = useHistory();
    let {projectId} = useParams();

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [prodUrlValue, setprodUrlValue] = useState('');
    const [devUrlValue, setDevUrlValue] = useState('');
    const [gitUrlValue, setGitUrlValue] = useState('');

    const [isReady, setIsReady] = useState(false);
    const [project, setProject] = useState({});

    useEffect(() => {
        if (projectId) {
            axios.get(`http://localhost:4000/project/${projectId}`)
                .then(res => {
                    resultHandler(res.data[0]);
                    setIsReady(true);
                });
        }
    }, []);

    function createProject() {
        axios.post("http://localhost:4000/post", {
            id: `${Math.floor(Math.random() * Math.floor(9999))}`,
            title: titleValue,
            description: descriptionValue,
            prod_link: prodUrlValue,
            dev_link: devUrlValue,
            git_link: gitUrlValue,
            other: '¯\\_(ツ)_/¯',
        }).then(res => {
            history.goBack();
        });
    }

    function editProject() {
        axios.put(`http://localhost:4000/project/edit/${projectId}`, {
            id: `${projectId}`,
            title: titleValue,
            description: descriptionValue,
            prod_link: prodUrlValue,
            dev_link: devUrlValue,
            git_link: gitUrlValue,
        }).then(res => {
            history.push(`/project/${projectId}`);
        });
    }

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
        if (projectId) {
            editProject();
        } else {
            createProject();
        }
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

    function onDeleteClick() {
        axios.delete(`http://localhost:4000/delete/${projectId}`)
            .then(res => {
                history.push(`/`);
            });
    }

    function backButtonClicked() {
        history.goBack();
    }

    return (
        <Row gutter={30}>
            <Affix style={{position: 'absolute', zIndex: '1', right: 0,}} offsetTop='0'>
                <Button className="main-button" type="primary" shape="circle" size="large" onClick={backButtonClicked} icon="rollback" />
            </Affix>
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
                        <Button.Group>
                            <Button htmlType="submit" type="primary"
                                    disabled={!isFormTouched}>Сохранить</Button>
                            {projectId &&
                                <Button type="danger" onClick={onDeleteClick}>Удалить</Button>
                            }
                        </Button.Group>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    )
}

export default FormPage;