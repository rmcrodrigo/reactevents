import React from 'react';

const Event = (props) => {
    const {event} = props;
    let text = event.description && event.description.text;
    if(text && text.length > 250)
        text = text.substr(0, 247) + '...';
    else
        text = null;
    return (
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                { 
                    event.logo
                    ? <img src={event.logo.url} alt={event.name} />
                    : null
                }
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{event.name.text}</h3>
                <p style={{textAlign:"justify"}}>{text}</p>
            </div>
            <div className="uk-card-footer">
                <a href={event.url} target="_blank" rel="noopener noreferrer" className="uk-button uk-button-secondary">Más Información</a>
            </div>
        </div>
    );
};

export default Event;