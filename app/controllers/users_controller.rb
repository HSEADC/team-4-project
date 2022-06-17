class UsersController < ApplicationController
  before_action :authorize_user, only: [:edit, :update]

  def show
    @user = User.find_by(name: params[:name])
    @account = @user.account
    @posts = @user.posts
    @current_user = current_account.user
  end

  def edit
    @user_json = UserSerializer.new(@user).to_json
  end

  def update
    if user.update(user_params)
      redirect_to current_user
    else
      flash[:error] = user.errors.full_messages.join(', ')
      redirect_to edit_user_path(current_user)
    end
  end


  def update
    respond_to do |format|
      if @user.update(user_params)
        format.json
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def user
    @user = User.find_by(name: params[:name])
  end

  def user_params
    params.require(:user).permit!
  end

  def authorize_user
    if current_user&.id != user.id
      flash[:error] = 'Вы можете редактировать только свой профиль.'
      redirect_to root_path and return
    end
  end
end
