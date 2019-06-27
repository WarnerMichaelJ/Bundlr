class Api::BlogsController < ApplicationController

  def create
    @blog = Blog.new(blog_params)
    @blog.author_id = current_user.id 

    if @blog.save
      render :show 
    else 
      render json: ["I guess you don't get to create a blog"], status: 401
    end
  end

  def destroy 
    @blog = current_user.blogs.find(params[:id])

    if @blog.destroy 
      # render '/api/users/show' #I think I'll change this to the user's general posts feed eventually
      render json: ['Nice, it totally worked']
    else 
      render json: ['This blog is indestructible'], status: 404
    end

  end

  def show 
    @blog = Blog.find(params[:id])

    if @blog 
      render :show 
    else 
      render json: @blog.errors.full_messages, status: 422
    end
  end

  def update 
    @blog = current_user.blogs.find(params[:blog][:id])

    if @blog.update(blog_params)
      # render :show 
      
    else 
      render json: @blog.errors.full_messages, status: 422
    end
  end


  private

  def blog_params
    params.require(:blog).permit(:name, :description, :author_id)
  end

end
