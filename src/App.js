import React from 'react';
import Header from './components/Header/Header';
import CategoryProvider from './context/CategoryContext';
import EventProvider from './context/EventContext';
import Form from './components/Form/Form';
import EventList from './components/Events/EventList/EventList';

function App() {
  return (
    <div className="App">
      <EventProvider>
        <CategoryProvider>
          <Header />
          <div className="uk-container">
            <Form />
            <EventList />
          </div>
        </CategoryProvider>
      </EventProvider>
    </div>
  );
}

export default App;
