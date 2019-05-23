import React from 'react';
import './EventComponent.scss';
import Icon from '../IconComponent/IconComponent';

const eventData = {name: 'Frederikshavn Demokrati festival 2017', description: 'I taet samarbejde med Danmarks debattør nr. 1 Clement Kjersgaard, Raeson, oplysningsforbundene og uddannelseinstitutionerne i Frederikshavn inviteres...'}

const eventComponent = () => (
    <div className="EventComponent">
    <div className="Event-Image">
    <div className="Event-Date">
      <div className="date">
        <p className="day">19</p>
        <p className="month">SEP</p>
      </div>
    </div>
    </div>
    
      <div className="Event-Description">
      <h2 className="Event-h2"> {eventData.name} </h2>
      <p> {eventData.description}</p>
      <button className="UiButton"><Icon fill="#ffffff"/> Laes mere</button>
      </div>
    </div>
);

export default eventComponent;
