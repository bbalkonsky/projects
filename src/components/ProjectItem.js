import React, { useState } from 'react';
import {Form, Input, Button, Affix, Row} from 'antd'
import {Card, Typography} from "antd";
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";

const { TextArea } = Input;
const { Title } = Typography;

function ProjectItem() {
    let history = useHistory();
    let { id } = useParams();

    let project = dbprojects.find(project => project.id === parseInt(id, 10));

    const [isFormTouched, setFormTouched] = useState(false);
    const [titleValue, setTitleValue] = useState(project.title);
    const [descriptionValue, setDescriptionValue] = useState(project.description);
    const [prodUrlValue, setprodUrlValue] = useState('https://welltesting.adm.ggr.gazprom.ru/');
    const [devUrlValue, setDevUrlValue] = useState('https://welltesting-dev.adm.ggr.gazprom.ru/');
    const [gitUrlValue, setGitUrlValue] = useState('https://gitlab.adm.ggr.gazprom.ru:8111/shortcuts');

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
                        <Button htmlType="submit" type="primary" block={true} disabled={!isFormTouched}>Сохранить</Button>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    )
}

export default ProjectItem;

const dbprojects = [
    {
        id: 0,
        title: 'Испытания скважин',
        description: 'Загрузка, хранение и представление данных для геологического моделирования и подсчета запасов',
        prodUrl: 'https://welltesting.adm.ggr.gazprom.ru/',
        devUrl: 'https://welltesting-dev.adm.ggr.gazprom.ru/',
        gitUrl: 'https://gitlab.adm.ggr.gazprom.ru:8111/shortcuts'
    },
    {
        id: 1,
        title: 'Сокращатель URL',
        description: 'Сервис для получения альтернативного короткого URL-адреса внутри корпоративной сети Общества',
        prodUrl: 'https://welltesting.adm.ggr.gazprom.ru/',
        devUrl: 'https://welltesting-dev.adm.ggr.gazprom.ru/',
        gitUrl: 'https://gitlab.adm.ggr.gazprom.ru:8111/shortcuts'
    },
    {
        id: 2,
        title: 'КХД ГГПИ',
        description: 'Корпоративное хранилище данных геолого-геофизической и промысловой информации',
        prodUrl: 'https://welltesting.adm.ggr.gazprom.ru/',
        devUrl: 'https://welltesting-dev.adm.ggr.gazprom.ru/',
        gitUrl: 'https://gitlab.adm.ggr.gazprom.ru:8111/shortcuts'
    },
    {
        id: 3,
        title: 'Сервис распознавания',
        description: 'Серверное решение для распознавания изображений документов',
        prodUrl: 'https://welltesting.adm.ggr.gazprom.ru/',
        devUrl: 'https://welltesting-dev.adm.ggr.gazprom.ru/',
        gitUrl: 'https://gitlab.adm.ggr.gazprom.ru:8111/shortcuts'
    }
];
