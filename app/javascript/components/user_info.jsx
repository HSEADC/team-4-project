import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"
import {useState} from 'react';

class UserInfo extends React.Component {
	constructor(props) {
		super(props)

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSurnameChange = this.handleSurnameChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)

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
	}

	componentDidMount() {
		$.ajaxSetup({
			headers: {
				'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
			}
		})
	}

	handleNameChange(e) {
		this.props.handleNameChange(e.target.value)
	}

	handleSurnameChange(e) {
		this.props.handleSurnameChange(e.target.value)
	}

	handleEmailChange(e) {
		this.props.handleEmailChange(e.target.value)
	}

	handleLink1Change(e) {
		this.props.handleLink1Change(e.target.value)
	}

	handleLink2Change(e) {
		this.props.handleLink2Change(e.target.value)
	}

	handleLink3Change(e) {
		this.props.handleLink3Change(e.target.value)
	}

	handleBehanceChange(e) {
		this.props.handleBehanceChange(e.target.value)
	}

	handleDribbleChange(e) {
		this.props.handleDribbleChange(e.target.value)
	}

	handleTelegramChange(e) {
		this.props.handleTelegramChange(e.target.value)
	}

	handleLinkedlnChange(e) {
		this.props.handleLinkedlnChange(e.target.value)
	}

	handleVkChange(e) {
		this.props.handleVkChange(e.target.value)
	}

	handleYoutubeChange(e) {
		this.props.handleYoutubeChange(e.target.value)
	}

	handleTwitterChange(e) {
		this.props.handleTwitterChange(e.target.value)
	}

	render() {
		return (
			<div className='registration_container'>
			<label className="grey1 h1">Редактирование профиля</label>
			<div className='height-xxs'></div>
			<label className="grey1 h2">Основная информация</label>
			<div className='height-xxs'></div>
				<div className='avatar_uploader inline center'>
					<div className='avatar'></div>
					<div className='width-s'></div>
					<div className='s_button green_button fit-content'>Загрузить фото</div>
				</div>

				<div className='height-l'></div>

				<div className='label_default_input column'>
					<label className="grey2 p">Никнейм</label>
          <input
            type="text"
            placeholder="Имя"
            name="name"
            value={ this.props.user.name }
            onChange={ this.handleNameChange }
            className="input grey1"
            />
        </div>

        <div className='label_default_input column'>
				<label className="grey2 p">Фамилия</label>
          <input
            type="text"
            placeholder="Фамилия"
            name="surname"
            value={ this.props.user.surname }
            onChange={ this.handleSurnameChange }
            className="input grey1"
            />
        </div>

				<div className='label_default_input column'>
				<label className="grey2 p">Email</label>
						<input
							type="text"
							placeholder={ this.props.user.email }
							name="email"
							value={ this.props.user.email }
							onChange={ this.handleEmailChange }
							className="input button grey1"
						/>
				</div>

				<div className='height-4rem'></div>




				<label className="grey1 h2">Ссылки</label>

				<div className='height-l'></div>

				<div className='label_default_input'>
					<input
							type="text"
							placeholder="https://"
							name="link1"
							defaultValue={ this.props.user.contacts.link1 }
							onChange={ this.handleLink1Change }
							className="input button grey1"
						/>

					<label>Ссылка</label>
				</div>



				<div className='height-xl'></div>

				<div className='label_default_input'>
					<input
							type="text"
							placeholder="https://"
							name="link2"
							defaultValue={ this.props.user.contacts.link2 }
							onChange={ this.handleLink2Change }
							className="input button grey1"
						/>

					<label>Ссылка</label>
				</div>

				<div className='height-xl'></div>

				<div className='label_default_input'>
					<input
							type="text"
							placeholder="https://"
							name="link3"
							defaultValue={ this.props.user.contacts.link3 }
							onChange={ this.handleLink3Change }
							className="input button grey1"
						/>

					<label>Ссылка</label>
				</div>

				<div className='height-4rem'></div>

				<div className="account_form_container column">
					<h2 className="grey1 h2">Контакты</h2>

					<div className='height-l'></div>

					<div className="grey1 inline">
						<i className='behance-small'></i>
						<div className='width-xxs'></div>
						<input
								type="text"
								placeholder="https://"
								name="behance"
								defaultValue={ this.props.user.socials.behance }
								onChange={ this.handleBehanceChange }
								className="input button grey1"
							/>
					</div>

					<div className='height-xl'></div>

					<div className="grey1 inline">
						<i className="dribble-small"></i>
						<div className='width-xxs'></div>
						<input
						type="text"
						placeholder="https://"
						name="dribble"
						defaultValue={ this.props.user.socials.dribble }
						onChange={ this.handleDribbleChange }
						className="input button grey1"
						/>
					</div>

					<div className='height-xl'></div>

					<div className="grey1 inline">
					<i className="telegram-small"></i>
					<div className='width-xxs'></div>
					<input
					type="text"
					placeholder="https://"
					name="telegram"
					defaultValue={ this.props.user.socials.telegram }
					onChange={ this.handleTelegramChange }
					className="input button grey1"
					/>
					</div>

					<div className='height-xl'></div>

					<div className="grey1 inline">
						<i className="linkedln-small"></i>
						<div className='width-xxs'></div>
						<input
							type="text"
							placeholder="https://"
							name="linkedln"
							defaultValue={ this.props.user.socials.linkedln }
							onChange={ this.handleLinkedlnChange }
							className="input button grey1"
						/>
					</div>

					<div className='height-xl'></div>

					<div className="grey1 inline">
					<i className="vk-small"></i>
					<div className='width-xxs'></div>
					<input
						type="text"
						placeholder="https://"
						name="vk"
						defaultValue={ this.props.user.socials.vk }
						onChange={ this.handleVkChange }
						className="input button grey1"
					/>
					</div>

					<div className='height-xl'></div>

					<div className="grey2 inline">
					<i className="youtube-small"></i>
					<div className='width-xxs'></div>
					<input
						type="text"
						placeholder="https://"
						name="youtube"
						defaultValue={ this.props.user.socials.youtube }
						onChange={ this.handleYoutubeChange }
						className="input button grey1"
					/>
					</div>

					<div className='height-xl'></div>

					<div className="grey2 inline">
						<i className="twitter-small"></i>
						<div className='width-xxs'></div>
						<input
							type="text"
							placeholder="https://"
							name="twitter"
							defaultValue={ this.props.user.socials.twitter }
							 onChange={ this.handleTwitterChange }
							className="input button grey1"
						/>

					</div>

					<div className='height-xl'></div>

				</div>
      </div>
		)
	}
}

export default UserInfo
