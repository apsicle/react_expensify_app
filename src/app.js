import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp options={['t1','22']}/>, document.getElementById('app'));
