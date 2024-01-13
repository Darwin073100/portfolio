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

    ]
}

export { data };