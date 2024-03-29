class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  # protect_from_forgery with: :null_session

  before_action :configure_permitted_parameters, if: :devise_controller?

  private

  def after_sign_in_path_for(resource)
    vacancies_path
  end

  def after_sign_up_path_for(resource)
    vacancies_path
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [
      user_attributes: [
        :name
      ]
    ])
  end

  def current_user
    @current_user ||= current_account.user if account_signed_in?
  end
end
