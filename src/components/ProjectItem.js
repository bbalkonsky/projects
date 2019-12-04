import React, { useState } from 'react';
import {Form, Input, Button } from 'antd'
import {Card, Typography} from "antd";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const { TextArea } = Input;
const { Title } = Typography;

function ProjectItem() {
    let { id } = useParams();
    let project = dbprojects.find(project => project.id === parseInt(id, 10));

    const [titleValue, setTitleValue] = useState(project.title);
    const [descriptionValue, setDescriptionValue] = useState(project.description);

    function handleSubmit(event) {
        event.preventDefault();
        project.title = titleValue;
        project.description = descriptionValue;
    }

    function handleChange(event) {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'titleValue') {
            setTitleValue(value);
        } else if (name === 'descriptionValue') {
            setDescriptionValue(value);
        }
    }

    return (
        <Card>
            <Link to='/'>Домой</Link>

            <Title level={3}>{titleValue}</Title>
            <p>{descriptionValue}</p>

            <Form onSubmit={handleSubmit} layout="horizontal">
                <Form.Item label="Заголовок">
                    <Input name="titleValue" value={titleValue} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Описание">
                    <TextArea name="descriptionValue" value={descriptionValue} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Описание">
                    <Button htmlType="submit" type="primary">Сохранить</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default ProjectItem;

const dbprojects = [
    {
        id: 0,
        title: 'Испытания скважин',
        description: 'Загрузка, хранение и представление данных для геологического моделирования и подсчета запасов',
    },
    {
        id: 1,
        title: 'Сокращатель URL',
        description: 'Сервис для получения альтернативного короткого URL-адреса внутри корпоративной сети Общества',
    },
    {
        id: 2,
        title: 'КХД ГГПИ',
        description: 'Корпоративное хранилище данных геолого-геофизической и промысловой информации',
    },
    {
        id: 3,
        title: 'Сервис распознавания',
        description: 'Серверное решение для распознавания изображений документов',
    }
];
