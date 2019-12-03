import React, { useState } from 'react';
import {Form, Input, Row, Col, Button } from 'antd'
import {dbprojects} from "../store/dataBase";
import {Card, Tag, Typography} from "antd";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const { TextArea } = Input;
const { Title } = Typography;

function ProjectItem() {
    let { id } = useParams();
    let {_, title, description, tags, colors} = dbprojects.find(project => project.id === parseInt(id, 10));

    const [titleValue, setTitleValue] = useState(title);
    const [descriptionValue, setDescriptionValue] = useState(description);

    function handleSubmit(event) {
        event.preventDefault();
        const data = dbprojects.find(project => project.id === parseInt(id, 10));
        data.title = titleValue;
        data.description = descriptionValue;
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

            <Title level={3}>{title}</Title>
            <p>{description}</p>
            <div>
                {tags.map((item, idx) =>
                    <Tag color={colors[idx]} key={idx}>{item}</Tag>
                )}
            </div>

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
