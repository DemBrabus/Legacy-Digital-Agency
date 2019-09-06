//
// React App Entry
//

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GroundZero from './GZ';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
                <Router>
                    <GroundZero />
                </Router>
                            ,document.getElementById('Portal'));

serviceWorker.unregister();
