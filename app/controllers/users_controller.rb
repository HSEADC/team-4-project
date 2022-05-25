class UsersController < ApplicationController
  before_action :authorize_user, only: [:edit, :update]

  def show
    @user = User.find_by(id: params[:id])
    @account = @user.account
    @posts = @user.posts
    @current_user = current_account.user
  end

  def edit
  end

  def update
    if user.update(user_params)
      redirect_to current_user
    else
      binding.irb
      flash[:error] = user.errors.full_messages.join(', ')
      redirect_to edit_user_path(current_user)
    end
  end

  private

  def user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(
      :name, :surname, :role, :department,
      account_attributes: [:image, :email, :description, :url, :contacts, :socials]
    )
  end

  def authorize_user
    if current_user&.id != user.id
      flash[:error] = 'Вы можете редактировать только свой профиль.'
      redirect_to root_path and return
    end
  end
end
