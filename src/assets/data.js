const default_comments = [{
        id: 1,
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and`,
        created_at: new Date(),
        author: {
            id: 2,
            name: 'Susan Griffin',
            avatar: 'avatar-1.png'
        },
        reply: []
    },
    {
        id: 2,
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and`,
        created_at: new Date(),
        author: {
            id: 3,
            name: 'Kelly Latta',
            avatar: 'avatar-2.png'
        },
        reply: [{
            id: 4,
            body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and`,
            created_at: new Date(),
            author: {
                id: 5,
                name: 'Wanda Meany',
                avatar: 'avatar-3.png'
            },
            reply: []
        }]
    }
]
export default [
    {
        id: Math.floor(Math.random() * 1000),
        created_at: new Date(),
        title: 'Продвинутый Golang. Урок 3: REST',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        shortDescription: 'В этом ролике мы добавим конфигурацию проекта, напишем config на YAML и запустим приложение с использованием unix-сокета.',
        comments: [...default_comments]
    },
    {
        id: Math.floor(Math.random() * 1000),
        created_at: new Date(),
        title: 'До и после: как Agile поменял процессы в команде разработки',
        description: '',
        shortDescription: 'Компания Galileosky производит и продает GPS-трекеры, которые реагируют на внешние события и работают с любой периферией — от простых реле до сложных дизельных',
        comments: [...default_comments]
    },
    {
        id: Math.floor(Math.random() * 1000),
        created_at: new Date(),
        title: '1',
        description: '3',
        shortDescription: '2',
        comments: [...default_comments]
    }
]
