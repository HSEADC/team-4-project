import React from 'react'
import PropTypes from "prop-types"
import $ from 'jquery'

export default class EventContainer extends React.Component {
  constructor(props) {
    super(props)

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.fileInput = React.createRef();

    this.state = {
      user_name: this.props.user_name,
      new_post: {
        title: this.props.new_post.title,
        url: this.props.new_post.url,
        text: this.props.new_post.text,
        new_image: this.props.new_post.new_image,
      },
      images: {
        image_1: this.props.image_1,
        image_2: this.props.image_2,
        image_3: this.props.image_3
      }
    }
  }

  handleSubmit(e) {
    event.preventDefault();
    var userName = this.state.user_name

    let formData = new FormData();
    formData.append("title", this.state.new_post.title,)
    formData.append("url", this.state.new_post.url)
    formData.append("text", this.state.new_post.text)
    formData.append("image", this.fileInput.current.files[0])

    $.ajax({
      url: "/posts",
      dataType: 'JSON',
      type: 'POST',
      method: 'POST',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      encode: true,
      success: response => {
        console.log('Post created');
      },
    }).done(function (data) {
      window.location.replace('/users/' + userName)
    })
  }

  handleTitleChange(e) {
    let title = e.target.value
    let newState = this.state
    newState.new_post.title = title

    this.setState({newState})
  }

  handleUrlChange(e) {
    let url = e.target.value
    let newState = this.state
    newState.new_post.url = url

    this.setState({newState})
  }

  handleTextChange(e) {
    let text = e.target.value
    let newState = this.state
    newState.new_post.text = text

    this.setState({newState})
  }

  render() {
    return (<div className="post_container">
      <label className="grey1 h1">Создать карточку</label>

      <div className='height-4rem'></div>

      <div className='post_types width-48rem radio'>

        <div className='radio__1 post_type'>
          <img className='post_img' src={this.state.images.image_1}></img>
          <div className='post_point'>
            <input type="radio" name="radio" className="input button grey1" id="radio-1" value="1"/>
            <div className='height-2rem'></div>
            <label for="radio-1" className="grey1 button"></label>
            <div className='width-1rem'></div>
            <p>Текст + картинка</p>
          </div>
        </div>

        <div className='radio__2 post_type'>
          <img className='post_img' src={this.state.images.image_2}></img>
          <div className='post_point'>
            <input type="radio" name="radio" className="input button grey1" id="radio-2" value="2"/>
            <div className='height-2rem'></div>
            <label for="radio-2" className="grey1 button"></label>
            <div className='width-1rem'></div>
            <p>Текст</p>
          </div>
        </div>

        <div className='radio__3 post_type'>
          <img className='post_img' src={this.state.images.image_3}></img>
          <div className='post_point'>
            <input type="radio" name="radio" className="input button grey1" id="radio-3" value="3"/>
            <div className='height-2rem'></div>
            <label for="radio-3" className="grey1 button"></label>
            <div className='width-1rem'></div>
            <p>Картинка</p>
          </div>
        </div>
      </div>

      <div className='height-4rem'></div>

      <div className='post_card_edit'>

      // спрятат input для загрузки картинки
      // width: 500px;
      // height: 500px;
      // position: absolute;
      // cursor: pointer;
      // opacity: 0;

        <div className='post_card_info'>
          <div className='height-2rem'></div>
          <input style={{ display: 'none', width: "100px" }} type="file" ref={this.fileInput} />
          <i className="imagePlaceholder"></i>
          <div className='height-l'></div>
          <div className='horizontal buttons'>
            <button onClick={this.handleSubmit} type="submit" value="Submit" className="s_button green_button fit-content">
              Загрузить
            </button>
          </div>
          <div className='height-2rem'></div>
        </div>

        <div className='post_card_input'>
          <div className='height-l'></div>
          <div className='label_default_input column'>
            <input
                type="text"
                placeholder="Заголовок"
                name="name"
                defaultValue={ this.props.new_post.title }
                onChange={ this.handleTitleChange }
                className="input button grey1"
              />

            <div className='label_default_input column'>
              <input
                type="text"
                placeholder="Заголовок"
                name="name"
                defaultValue={ this.props.new_post.url }
                onChange={ this.handleUrlChange }
                className="input button grey1"/>
              <div className='height-xs'></div>
              <div className='label_default_input column'>
              <textarea type="text" placeholder="Текст" name="name"
                  defaultValue={ this.props.new_post.text }
                  onChange={ this.handleTextChange }
                  className="input button grey1"/>
              </div>
              <div className='height-l'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='height-4rem'></div>
      <div className='horizontal buttons'>
        <button onClick={this.handleSubmit} type="submit" value="Submit" className="s_button green_button fit-content">
          Опубликовать
        </button>
      </div>
    </div>)
  }
}
