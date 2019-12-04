import React, { useEffect, useState } from 'react';
import MainPageItem from "./MainPageItem";

function MainPage() {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
    //     axios.get("http://localhost:4000/all").then(res => setProjects(res.data));
        setProjects(dbprojects);
    }, []);

    return (
        projects.length &&
            projects.map(project =>
                <MainPageItem
                    id={project.id}
                    header={project.title}
                    description={project.description}
                    key={project.id}/>
            )
    )
}

export default MainPage;

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
