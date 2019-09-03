//
//React App Entry
//

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GroundZero from './App/GZ';

ReactDOM.render(
            <Router>
                <GroundZero />
            </Router>
                ,document.getElementById('Portal'));
