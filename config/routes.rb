Rails.application.routes.draw do
  devise_for :accounts
  root to: 'pages#home'
  resources :vacancies
  resources :posts, only: %i[new create destroy]
  resources :users, only: %i[show edit update], param: :name
  resources :events, only: :index
end
