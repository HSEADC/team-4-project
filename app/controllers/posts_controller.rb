class PostsController < ApplicationController
  def new
    @user = current_user
    @post = Post.new
  end

  def create
    @post = current_user.posts.new(post_params)
    @post.save
    head :ok
    #   redirect_to current_user, notice: 'post was successfully created.'
    # else
    #   render :new, alert: @post.errors
    # end
  end

  def destroy
    post = Post.find_by(id: params[:id])
    post.destroy

    redirect_to current_user, notice: 'post was successfully destroyed.'
  end

  private

  def post_params
    params.permit(
      :title, :text, :url, :image
    )
  end
end
