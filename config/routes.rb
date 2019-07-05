Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index] 
    resource :session, only: [:create, :destroy, :show]
    resources :blogs, only: [:create, :destroy, :show, :update]

    resources :likes, only: [:create, :destroy, :index]
    resources :posts, only: [:show, :create, :update, :destroy, :index]
  end

  root "static_pages#root"
end

# "api/users" since we will likely need multiple users

