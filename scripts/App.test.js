import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//stash change
//test stash 2
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
