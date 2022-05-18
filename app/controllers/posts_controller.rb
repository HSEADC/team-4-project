class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      redirect_to current_user, notice: 'post was successfully created.'
    else
      render :new, alert: @post.errors
    end
  end

  def destroy
    post = Post.find_by(id: params[:id])
    post.destroy

    redirect_to current_user, notice: 'post was successfully destroyed.'
  end

  private

  def post_params
    params.require(:post).permit(
      :title, :text, :url, :image
    )
  end
end
