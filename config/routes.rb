Rails.application.routes.draw do
  resource :post, only: %i[index] 
end