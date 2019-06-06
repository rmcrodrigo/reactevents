import React, { Component } from 'react';
import axios from 'axios';

const EventContext = React.createContext();

export const EventConsumer = EventContext.Consumer;

class EventProvider extends Component {
    token = 'CL5LO6OO7W6UVBSIIDQB';

    state = {
        events: []
    };

    getEvents = async (searchObj) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${searchObj.name}&categories=${searchObj.category}&sort_by=date&token=${this.token}&locale=es_ES`;
        const eventResponse = await axios.get(url);
        this.setState({
            events: eventResponse.data
        });
    }

    render() {
        return (
            <EventContext.Provider
                value={{
                    events: this.state.events,
                    getEvents: this.getEvents
                }}
            >
                { this.props.children }
            </EventContext.Provider>
        );
    }
}

export default EventProvider;