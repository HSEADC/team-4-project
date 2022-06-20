import React from 'react'
import PropTypes from "prop-types"

export default class EventContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

	render() {
		return (
			<div className="post_container">
			<label className="grey1 h1">Создать карточку</label>

			<div className='height-xxs'></div>

			<div className='post_types'>

				<div className='post_type'>
					<i className="youtube-small"></i>
					<input
						type="text"
						placeholder="Имя"
						name="name"
						//value={ this.props.user.name }
						onChange={ this.handleNameChange }
						className="input button grey1"
						/>
						<label className="grey1 button">Текст + картинка</label>
				</div>

				<div className='post_type'>
					<i className="youtube-small"></i>
					<input
						type="text"
						placeholder="Имя"
						name="name"
						//value={ this.props.user.name }
						onChange={ this.handleNameChange }
						className="input button grey1"
						/>
						<label className="grey1 button">Текст</label>
				</div>

				<div className='post_type'>
					<i className="youtube-small"></i>
					<input
						type="text"
						placeholder="Имя"
						name="name"
						//value={ this.props.user.name }
						onChange={ this.handleNameChange }
						className="input button grey1"
						/>
						<label className="grey1 button">Картинка</label>
				</div>

			</div>

				<div className='post_card_info'>
					<i className="imagePlaceholder"></i>
					<div className='horizontal buttons'>
							<button
								onClick={this.handleSubmit}
								type="submit"
								value="Submit"
								className="s_button green_button fit-content"> Загрузить
							</button>
						</div>
		      </div>

					<div className='label_default_input column'>
						<input
							type="text"
							placeholder="Заголовок"
							name="name"
							//value={ this.props.user.name }
							//onChange={ this.handleNameChange }
							className="input button grey1"
							/>
							<div className='label_default_input column'>
								<textarea
									type="text"
									placeholder="Текст"
									name="name"
									//value={ this.props.user.name }
									//onChange={ this.handleNameChange }
									className="input button grey1"
									/>
							</div>

							<div className='horizontal buttons'>
									<button
										onClick={this.handleSubmit}
										type="submit"
										value="Submit"
										className="s_button green_button fit-content"> Опубликовать
									</button>
								</div>
					</div>





      </div>
		)
	}
}
