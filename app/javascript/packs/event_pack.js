import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EventContainer from '../containers/EventContainer'


document.addEventListener('DOMContentLoaded', () => {
 const images = JSON.parse(document.getElementsByClassName('images')[0].dataset.props)
 ReactDOM.render(<EventContainer {...images}/>, document.getElementsByClassName('form')[0].appendChild(document.createElement('div')))
})
