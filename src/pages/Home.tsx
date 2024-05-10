import React from 'react';
import { Information } from '../containers/Information';
import { data } from '../utils/data.ts';
import userPicture from '../assets/perfil.jpg';
import backgroundPicture from '../assets/background.jpg';
import { InformationToolsItem } from '../components/InformationToolsItem';

function Home() {
  return (
    <Information>
      <h1>{ `${data.name} ${data.surname}` }</h1>
      <span>Ingeniero en Tecnologías de la Información y Comunicaciones</span>
      <div className="information-main">
        <article className="information-me">
          <div className="me-header">
            <figure className="me-header-background">
              <img src={ backgroundPicture } alt="background" />
            </figure>
            <figure className="me-header-picture">
              <img src={ userPicture } alt="my-picture" />
            </figure>
          </div>
          <div className="me-information">
            <h2>Desarrollador Web Full Stack</h2>
            <p>
              Desarrollador Web apasionado con mi carrera y en busca de nuevos 
              y emocionantes retos. Altamente responsable y sumamente entregado 
              al cumplimiento del deber.
            </p>
          </div>
        </article>
        <article className="information-tools">
          <h2>Habilidades técnicas</h2>
          {data.tools?.map( tool => ( 
            <InformationToolsItem src={tool.picture} value={tool.name} tools={tool.tools} key={tool.name}/>
          ))}          
        </article>
      </div>
    </Information>
  )
}

export { Home };