class Api::LikesController < ApplicationController

  def index 
    @likes = current_user.likes 

    render :index 
  end

  def create
    @like = Like.new
    @like.user_id = current_user.id
    
    @like.post_id = params[:postId]  #The postId is being sent down in the params
    #This is happening through the ajax request's   data: { postId }
    @post = Post.find(params[:postId])
    
    if @like.save
      render :show 
    else
      render json: ['like did not process'], status: 422
    end
  end


  def destroy
    
    @like = Like.where(user_id: current_user.id).find(params[:id])
    # @like = Like.where(user_id:  current_user.id, post_id: params[:postId]) 
    
    
    if @like
      @like.destroy!
      @post = Post.find(@like.post_id)
      render :show 
    else
      render json: ['unlike did not process'], status: 422
    end
  end

  private 

  def like_params
    params.require(:like).permit(:post_id, :user_id)
  end

end