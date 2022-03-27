class VacanciesController < ApplicationController
  def index
    @vacancies = Vacancy.all
  end

  def new; end

  def create; end
end
