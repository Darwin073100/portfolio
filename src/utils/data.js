import React from "react";
import javaIcon from '../assets/java.svg';
import springIcon from '../assets/spring.svg';
import sjfIcon from '../assets/jsf-logo.png';
import ejbIcon from '../assets/ejb.png';

import javascriptIcon from '../assets/javascript.svg';
import nodeIcon from '../assets/nodejs.svg';
import reactIcon from '../assets/react.svg';
import expressIcon from '../assets/express.svg';

import dbIcon from '../assets/db.svg';
import postgressqlIcon from '../assets/postgresql.svg';
import mysqlIcon from '../assets/mysql.svg';
import sqlserverIcon from '../assets/sqlserver.svg';

import linuxIcon from '../assets/linux.svg';
import ubuntuIcon from '../assets/ubuntu.svg';

import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import bootrstrap from '../assets/bootstrap.svg'

import facebook from '../assets/projects/facebook.png';
import maqueta from '../assets/projects/maqueta-profile.png';
import youtube from '../assets/projects/youtube.png';
import shopsystem from '../assets/projects/shop.png';


const data = {
    name: 'Edwin',
    surname: 'Garcia Quiterio',
    tools:[
        {
            name: 'Java',
            picture: javaIcon,
            tools:[
                {
                    name: 'Spring Boot',
                    picture: springIcon
                },
                {
                    name: 'Java ServerFaces',
                    picture: sjfIcon
                },
                {
                    name: 'Enterprice JavaBeans',
                    picture: ejbIcon
                },
            ]
        },
        {
            name: 'HTML',
            picture: html5,
            tools: []
        },
        {
            name: 'CSS',
            picture: css3,
            tools: [
                {
                    name: 'Bootrstrap',
                    picture: bootrstrap
                }
            ]
        },
        {
            name: 'JavaScript',
            picture: javascriptIcon,
            tools:[
                {
                    name: 'Node.js',
                    picture: nodeIcon
                },
                {
                    name: 'React.js',
                    picture: reactIcon,
                },
                {
                    name: 'Express.js',
                    picture: expressIcon
                },
            ]
        },
        {
            name: 'Bases de datos',
            picture: dbIcon,
            tools:[
                {
                    name: 'PostgreSQL',
                    picture: postgressqlIcon
                },
                {
                    name: 'MySQL',
                    picture: mysqlIcon
                },
                {
                    name: 'Microsoft SQL Server',
                    picture: sqlserverIcon
                },
            ]
        },
        {
            name: 'Linux',
            picture: linuxIcon,
            tools:[
                {
                    name: 'Ubuntu',
                    picture: ubuntuIcon
                }
            ]
        },

    ],
    projects:[
        {
            name: 'Shop System',
            description: 'En este proyecto vamos a controlar distintas entidades y procesos, es simular un sistema de administración, donde podamos tener Empleados, Productos, Clientes, Proveedores, entre otras entidades mas que se muestran en el diagrama mas adelante.',
            github: 'https://github.com/Darwin073100/ShopSystem',
            deploy: '#',
            picture: shopsystem,
            tecnologies:[
                {
                    name: 'Java',
                    picture: javaIcon
                },
                {
                    name: 'Java ServerFaces',
                    picture: sjfIcon
                },
                {
                    name: 'HTML',
                    picture: html5
                },
                {
                    name: 'CSS',
                    picture: css3
                },
            ]
        },
        {
            name: 'Clon login de facebook',
            description: 'Es la maquetación de la pantalla del login de Facebook, esta solo adaptada para pantallas Desktop, ya que fue de practica, cuando estaba empezando a diseñar con html y css.',
            github: 'https://github.com/Darwin073100/projects-ui',
            deploy: 'https://darwin073100.github.io/projects-ui/facebook/pages/login.html',
            picture: facebook,
            tecnologies:[
                {
                    name: 'HTML',
                    picture: html5
                },
                {
                    name: 'CSS',
                    picture: css3
                }
            ]
        },
        {
            name: 'Maquetación de un portafolio',
            description: 'Hicimos un proyecto donde pudieramos plasmar las herramientas que manejamos, información personal, como tambien proyectos que hemos realizado, si podemos ver es la maquetación de este mismo sitio web.',
            github: 'https://github.com/Darwin073100/projects-ui',
            deploy: 'https://darwin073100.github.io/projects-ui/profile/',
            picture: maqueta,
            tecnologies:[
                {
                    name: 'HTML',
                    picture: html5
                },
                {
                    name: 'CSS',
                    picture: css3
                },
                {
                    name: 'JavaScript',
                    picture: javascriptIcon
                }
            ]
        },
        {
            name: 'Clon del home de Youtube',
            description: 'En este proyecto vamos a ver un clon de la pagina Home de youtube, donde esta el catalago de videos y shorts, puedes ir a verlo, ya que esta publicado.',
            github: 'https://github.com/Darwin073100/youtube-clone',
            deploy: 'https://ephemeral-sunshine-a179ce.netlify.app/',
            picture: youtube,
            tecnologies:[
                {
                    name: 'HTML',
                    picture: html5
                },
                {
                    name: 'CSS',
                    picture: css3
                },
                {
                    name: 'JavaScript',
                    picture: javascriptIcon
                },
                {
                    name: 'React.js',
                    picture: reactIcon
                }
            ]
        }
    ]
}

export { data };