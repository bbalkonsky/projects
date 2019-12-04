import React, { useEffect, useState } from 'react';
import MainPageItem from "./MainPageItem";
import {Affix, Button, Row} from "antd";

function MainPage() {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
    //     axios.get("http://localhost:4000/all").then(res => setProjects(res.data));
        setProjects(dbprojects);
    }, []);

    // if (projects.length === 0) {return null};

    return (
        <Row gutter={30}>
            <Affix style={{position: 'absolute', zIndex: '1', right: 0,}} offsetTop='0'>
                <Button className="main-button" type="primary" shape="circle" size="large" icon="plus" />
            </Affix>

            {projects.length &&
                projects.map(project =>

                        <MainPageItem
                            id={project.id}
                            header={project.title}
                            description={project.description}
                            prodUrl={project.prodUrl}
                            devUrl={project.devUrl}
                            gitUrl={project.gitUrl}
                            key={project.id}/>
                )}
        </Row>
    )
}

export default MainPage;

const dbprojects = [
    {
        id: 0,
        title: 'Испытания скважин',
        description: 'Загрузка, хранение и представление данных для геологического моделирования и подсчета запасов',
        prodUrl: '',
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
