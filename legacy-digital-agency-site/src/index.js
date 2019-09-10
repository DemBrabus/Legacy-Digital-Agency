//
// React App Entry
//

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './App/Components/Constants/ScrollToTop/ScrollToTop';
import GroundZero from './GZ';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
                <Router>
                    <ScrollToTop>
                        <GroundZero />
                    </ScrollToTop>
                </Router>
                            ,document.getElementById('Portal'));

serviceWorker.unregister();
