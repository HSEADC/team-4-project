import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import PostForm from '../containers/post_form'


document.addEventListener('DOMContentLoaded', () => {
 // const userForm = JSON.parse(document.getElementsByClassName('user_form')[0].dataset.props)

 ReactDOM.render(<PostForm />, document.getElementsByClassName('post_form')[0].appendChild(document.createElement('div')))
})
