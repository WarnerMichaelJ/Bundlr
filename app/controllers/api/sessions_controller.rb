class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render json: ["Looks like the login session got created dawg wooohhoooooo"]
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

end