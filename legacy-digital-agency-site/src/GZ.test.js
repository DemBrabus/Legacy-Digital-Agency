import React from 'react';
import ReactDOM from 'react-dom';
import GZ from './GZ';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GZ />, div);
  ReactDOM.unmountComponentAtNode(div);
});
