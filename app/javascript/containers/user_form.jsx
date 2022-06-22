import React from 'react'
import PropTypes from "prop-types"
import $ from 'jquery'

import UserInfo from '../components/user_info'


export default class UserForm extends React.Component {
	constructor(props) {
		super(props)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handleSurnameChange = this.handleSurnameChange.bind(this)
		this.handleLink1Change = this.handleLink1Change.bind(this)
		this.handleLink2Change = this.handleLink2Change.bind(this)
		this.handleLink3Change = this.handleLink3Change.bind(this)
		this.handleBehanceChange = this.handleBehanceChange.bind(this)
		this.handleDribbleChange = this.handleDribbleChange.bind(this)
		this.handleTelegramChange = this.handleTelegramChange.bind(this)
		this.handleLinkedlnChange = this.handleLinkedlnChange.bind(this)
		this.handleVkChange = this.handleVkChange.bind(this)
		this.handleYoutubeChange = this.handleYoutubeChange.bind(this)
		this.handleTwitterChange = this.handleTwitterChange.bind(this)




		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			user: {
        id: this.props.user.id,
        name: props.user.name,
				surname: props.user.surname,
        email: props.user.email,
				contacts: props.user.contacts,
				socials: props.user.socials
			},
		}
	}

	handleSubmit(e) {
		var userName = this.state.user.name
		$.ajax({
				url: "/users/" + this.props.user.name,
				dataType: 'JSON',
				type: 'PATCH',
				method: 'PATCH',
				data: {
					user: {
						name: this.state.user.name,
						email: this.state.user.email,
						surname: this.state.user.surname
					}
				},
				success: response => {
					console.log('User updated');
				}
			})
			.done(function (data) {
				window.location.replace('/users/' + userName)
			})
	}

	handleNameChange(name) {
		let newState = this.state
		newState.user.name = name

		this.setState({
			newState
		})
	}

	handleSurnameChange(surname) {
		let newState = this.state
		newState.user.surname = surname

		this.setState({
			newState
		})
	}

	handleEmailChange(email) {
		let newState = this.state
		newState.user.email = email

		this.setState({
			newState
		})
	}

	handleLink1Change(link) {
		let newState = this.state
		newState.user.contacts.link1 = link

		this.setState({
			newState
		})
	}

	handleLink2Change(link) {
		let newState = this.state
		newState.user.contacts.link2 = link

		this.setState({
			newState
		})
	}



	handleLink3Change(link) {
		let newState = this.state
		newState.user.contacts.link3 = link

		this.setState({
			newState
		})
	}

	handleBehanceChange(link) {
		let newState = this.state
		newState.user.socials.behance = link

		this.setState({
			newState
		})
	}

	handleDribbleChange(link) {
		let newState = this.state
		newState.user.socials.dribble = link

		this.setState({
			newState
		})
	}

	handleTelegramChange(link) {
		let newState = this.state
		newState.user.socials.telegram = link

		this.setState({
			newState
		})
	}

	handleLinkedlnChange(link) {
		let newState = this.state
		newState.user.socials.linkedln = link

		this.setState({
			newState
		})
	}

	handleVkChange(link) {
		let newState = this.state
		newState.user.socials.vk = link

		this.setState({
			newState
		})
	}

	handleYoutubeChange(link) {
		let newState = this.state
		newState.user.socials.youtube = link

		this.setState({
			newState
		})
	}

	handleTwitterChange(link) {
		let newState = this.state
		newState.user.socials.twitter = link

		this.setState({
			newState
		})
	}


	render() {
		return (
			<div className="">
        <UserInfo
					user={ this.state.user }
          handleNameChange={ this.handleNameChange }
          handleSurnameChange={ this.handleSurnameChange }
          handleEmailChange={ this.handleEmailChange }
					handleLink1Change={ this.handleLink1Change }
					handleLink2Change={ this.handleLink2Change }
					handleLink3Change={ this.handleLink3Change }
					handleBehanceChange={ this.handleBehanceChange }
					handleDribbleChange={ this.handleDribbleChange }
					handleTelegramChange={ this.handleTelegramChange }
					handleLinkedlnChange={ this.handleLinkedlnChange }
					handleVkChange={ this.handleVkChange }
					handleYoutubeChange={ this.handleYoutubeChange }
					handleTwitterChange={ this.handleTwitterChange }



        />
				<div className='horizontal buttons'>
						<button
							onClick={this.handleSubmit}
							type="submit"
							value="Submit"
							className="s_button green_button fit-content"> Сохранить
						</button>
					</div>
      </div>
		)
	}
}
