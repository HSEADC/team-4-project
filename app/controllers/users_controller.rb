class UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
    @account = @user.account
    @posts = @user.posts
    @current_user = current_account.user
  end
end
