import React, {useEffect, useState} from 'react';
import {Form, Input, Button, Card} from 'antd'
import {useHistory} from "react-router-dom";
import axios from "axios";

const { TextArea } = Input;

function FormPage(props) {
    let history = useHistory();

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [prodUrlValue, setprodUrlValue] = useState('');
    const [devUrlValue, setDevUrlValue] = useState('');
    const [gitUrlValue, setGitUrlValue] = useState('');

    const [isReady, setIsReady] = useState(false);
    const [project, setProject] = useState({});

    useEffect(() => {
        if (props.projectId) {
            axios.get(`http://localhost:4000/project/${props.projectId}`)
                .then(res => {
                    resultHandler(res.data[0]);
                    setIsReady(true);
                });
        }
    }, []);

    function writeProject() {
        axios.post("http://localhost:4000/post", {
            id: `${Math.floor(Math.random() * Math.floor(9999))}`,
            title: titleValue,
            description: descriptionValue,
            prod_link: prodUrlValue,
            dev_link: devUrlValue,
            git_link: gitUrlValue,
            other: '¯\\_(ツ)_/¯',
        }).then(res => console.log(res.data));
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
        writeProject();
        if (props.projectId) {
            history.push('/');
        } else {
            history.goBack();
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

    return (
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
    )
}

export default FormPage;