import React from 'react';
import Header from './components/Header/Header';
import CategoryProvider from './context/CategoryContext';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <Header />
        <div className="uk-container">
          <Form />
        </div>
      </CategoryProvider>
    </div>
  );
}

export default App;
