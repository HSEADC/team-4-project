import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EventContainer from '../containers/EventContainer'


document.addEventListener('DOMContentLoaded', () => {
 // const userForm = JSON.parse(document.getElementsByClassName('user_form')[0].dataset.props)

 ReactDOM.render(<EventContainer />, document.getElementsByClassName('user_form')[0].appendChild(document.createElement('div')))
})
