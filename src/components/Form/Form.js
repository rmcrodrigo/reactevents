import React, { Component } from 'react';

import {CategoryConsumer} from '../../context/CategoryContext';
import {EventConsumer} from '../../context/EventContext';

class Form extends Component {
    state = {
        name: "",
        category: "-1"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <EventConsumer>
                { (value) => (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        value.getEvents(this.state);
                    }}>
                        <fieldset className="uk-fieldset uk-margin">
                            <legend className="uk-legend uk-text-center">
                                Busca tu evento por nombre o categoría
                            </legend>
                        </fieldset>

                        <div className="uk-column-1-3@m uk-margin">
                            <div className="uk-margin" uk-margin="true">
                                <input
                                    className="uk-input"
                                    name="name"
                                    onChange={this.handleChange}
                                    placeholder="Nombre de evento o ciudad"
                                    type="text"
                                    value={this.state.name} />
                            </div>
                            <div className="uk-margin" uk-margin="true">
                                <select
                                    className="uk-select"
                                    name="category"
                                    onChange={this.handleChange}
                                    value={this.state.category} >
                                    <option value="-1"
                                        data-uk-form-select >Selecciona una opción</option>
                                    <CategoryConsumer>
                                        { 
                                            (value) => (
                                                value.categories.map(category => (
                                                    <option
                                                        key={category.id}
                                                        value={category.id}
                                                        data-uk-form-select >
                                                        {category.name_localized}
                                                    </option>
                                                ))
                                            )}
                                    </CategoryConsumer>
                                </select>
                            </div>
                            <div className="uk-margin" uk-margin="true">
                                <input
                                    type="submit"
                                    className="uk-button uk-button-danger" />
                            </div>
                        </div>
                    </form>
                )}
            </EventConsumer>
        );
    }
}

export default Form;