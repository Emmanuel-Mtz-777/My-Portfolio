export type Project = {
    title: string;
    description: string;
    github: string;
    image?: string;
    tags: string[];

};



export const MyProjects:Project[] =[

    
    {
        title:'Spotify-Insights-with-Elasticsearch',
        description: 'Análisis de Big Data con Elasticsearch sobre un dataset de canciones de Spotify. Permite consultar características como duración, energía y valencia, y visualizar los resultados en Jupyter Notebooks. Todo el entorno (Elasticsearch y Kibana) corre en contenedores Docker.',
        github:'https://github.com/Emmanuel-Mtz-777/Spotify-Insights-with-Elasticsearch',
        image:'/images/Spotify-Insights.avif',
        tags:['Python','Jupyter Notebook','ElasticSearch','Docker'],
        
    },
        {
        title:'Snakify',
        description:'Proyecto frontend desarrollado para un E-commerce enfocado en la venta de postres en tiendas locales. Permite la interacción del usuario con la interfaz, dejando abierta la posibilidad de integrar un backend en el futuro.',
        github:'https://github.com/Emmanuel-Mtz-777/Snackify',
        image:'/images/Snackify.avif',
        tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Astro'],
        
    },
    {
        title:'C-Ita',
        description:'Proyecto frontend desarrollado en Kotlin, enfocado en crear una red social al estilo Facebook para estudiantes del ITA. Permite la interacción entre usuarios mediante publicaciones, utilizando tanto una base de datos local SQLite como una API externa desarrollada en Node.js con conexión a una base de datos MySQL para simular funcionalidades básicas de una red social.',
        github:'https://github.com/Emmanuel-Mtz-777/Cita',
        image:'/images/C-Ita.avif',
        tags:['Kotlin'],
        
    },
    {
        title:'Meet2go',
        description: 'Aplicación móvil multiplataforma desarrollada con React Native y Supabase para conectar personas con intereses similares y organizar eventos grupales. Incluye perfiles de usuario, gestión de eventos y un sistema de chat en tiempo real basado en un microservicio con Express desplegado en Heroku.',
        github:'https://github.com/Emmanuel-Mtz-777/meet2Go.git',
        image:'/images/Meet2Go.avif',
        tags:['React','React Native', 'Supabase', 'Express'],
        
    },
]