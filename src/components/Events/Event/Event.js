import React from 'react';

const Event = (props) => {
    return (
        <div>
            {props.event.description.text}
        </div>
    );
};

export default Event;