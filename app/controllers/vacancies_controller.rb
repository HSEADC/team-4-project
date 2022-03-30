class VacanciesController < ApplicationController
  def index
    @vacancies = Vacancy.all
  end

  def new
    @vacancy = Vacancy.new
  end

  def show
    @vacancy = Vacancy.find(params[:id])
  end

  def create
    @vacancy = current_account.vacancies.new(vacancy_params)

    if @vacancy.save
      redirect_to @vacancy, notice: 'vacancy was successfully created.'
    else
      render :new, alert: @vacancy.errors
    end
  end

  def vacancy_params
    params.require(:vacancy).permit(:id, :title, :description, :salary, :remote, :occupation_type, :account_id,
      city_vacancies_attributes: [:vacancy_id, :city_id],
      skill_vacancies_attributes: [:vacancy_id, :skill_id]
    )
  end
end
