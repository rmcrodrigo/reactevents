import React from 'react';
import {EventConsumer} from '../../../context/EventContext';
import Event from '../Event/Event';

const EventList = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventConsumer>
                { (value) => {
                    return (
                        value.events && value.events.events ? value.events.events.map((event) => (
                            <Event key={event.id} event={event} />
                        )) : null
                    )}
                }
            </EventConsumer>
        </div>
    );
};

export default EventList;