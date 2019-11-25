import React from 'react';
import ProjectItem from "./components/ProjectItem";
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
        <Row>
            <Col span={12} offset={6}>
                {projects.map((project, idx) =>
                    <ProjectItem
                        header={project.title}
                        description={project.description}
                        tags={project.tags}
                        colors={project.colors}
                        key={idx} />
                )}
            </Col>
        </Row>
    </div>
  );
}

export default App;

const projects = [
    {
        title: 'Испытания скважин',
        description: 'Загрузка, хранение и представление данных для геологического моделирования и подсчета запасов',
        tags: ['Angular', 'NodeJS', 'PostgreSQL', 'Silex', 'Bootstrap'],
        colors: ['magenta', 'volcano', 'lime', 'cyan', 'geekblue']
    },
    {
        title: 'Сокращатель URL',
        description: 'Сервис для получения альтернативного короткого URL-адреса внутри корпоративной сети Общества',
        tags: ['Angular', 'NodeJS', 'PostgreSQL'],
        colors: ['magenta', 'volcano', 'lime', 'cyan', 'geekblue']
    },
    {
        title: 'КХД ГГПИ',
        description: 'Корпоративное хранилище данных геолого-геофизической и промысловой информации',
        tags: ['Angular', 'NodeJS', 'PostgreSQL'],
        colors: ['magenta', 'volcano', 'lime', 'cyan', 'geekblue']
    },
    {
        title: 'Сервис распознавания',
        description: 'Серверное решение для распознавания изображений документов',
        tags: ['Angular', 'NodeJS', 'PostgreSQL', '1С', 'Ontology (OWL)'],
        colors: ['magenta', 'volcano', 'lime', 'cyan', 'geekblue']
    }
];