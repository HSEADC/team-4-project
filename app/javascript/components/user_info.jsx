import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"

class UserInfo extends React.Component {
	constructor(props) {
		super(props)

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSurnameChange = this.handleSurnameChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
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
            className="input button grey1"
            />
        </div>

        <div className='label_default_input column'>
				<label className="grey2 p">Фамилия</label>
          <input
            type="text"
            placeholder="Фамилия"
            name="surname"
            value={ this.props.user.surname }
            onChange={ this.handleRoleChange }
            className="input button grey1"
            />
        </div>

				<div className='label_default_input column'>
				<label className="grey2 p">Email</label>
						<input
							type="text"
							placeholder="Email"
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
							name="email"
							value={ this.props.user.email }
							onChange={ this.handleEmailChange }
							className="input button grey1"
						/>

					<label>Ссылка</label>
				</div>

				<div className='height-xl'></div>

				<div className='label_default_input'>
					<input
							type="text"
							placeholder="https://"
							name="email"
							value={ this.props.user.email }
							onChange={ this.handleEmailChange }
							className="input button grey1"
						/>

					<label>Ссылка</label>
				</div>

				<div className='height-xl'></div>

				<div className='label_default_input'>
					<input
							type="text"
							placeholder="https://"
							name="email"
							value={ this.props.user.email }
							onChange={ this.handleEmailChange }
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
								value={ this.props.user.email }
								// onChange={ this.handleEmailChange }
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
						value={ this.props.user.email }
						// onChange={ this.handleEmailChange }
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
					value={ this.props.user.email }
					// onChange={ this.handleEmailChange }
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
							value={ this.props.user.email }
							// onChange={ this.handleEmailChange }
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
						value={ this.props.user.email }
						// onChange={ this.handleEmailChange }
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
						value={ this.props.user.email }
						// onChange={ this.handleEmailChange }
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
							value={ this.props.user.email }
							// onChange={ this.handleEmailChange }
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
