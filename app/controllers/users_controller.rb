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
    user.update(user_params.except(:email)) && user.account.update(email: user_params[:email])
  end

  private

  def user
    @user = User.find_by(name: params[:name])
  end

  def user_params
    params.required(:user).permit!
  end

  def authorize_user
    if current_user&.id != user.id
      flash[:error] = 'Вы можете редактировать только свой профиль.'
      redirect_to root_path and return
    end
  end
end
