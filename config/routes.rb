Rails.application.routes.draw do
  devise_for :accounts
  root to: 'pages#home'
  resources :vacancies
end
