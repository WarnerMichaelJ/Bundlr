class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id 

    if @post.save
      render :show 
    else 
      render json: ["I guess you don't get to create a post"], status: 401
    end
  end

  def destroy 
    @post = current_user.posts.find(params[:id])

    if @post.destroy 
      # render '/api/users/show' #I think I'll change this to the user's general posts feed eventually
      # Though in this context I'm thinking of it in terms of posts so I'm going to have to think about what should get rendered
      render json: ['Nice, creating the post totally worked']
    else 
      render json: ['This post is indestructible'], status: 404
    end

  end

  def show 
    @post = Post.find(params[:id])

    if @post 
      render :show 
    else 
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update 
    @post = current_user.posts.find(params[:post][:id])

    if @post.update(post_params)
      # render :show 
      
    else 
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index 
    

  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :author_id)
  end

end
