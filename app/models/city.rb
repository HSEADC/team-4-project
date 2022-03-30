class City < ApplicationRecord
  has_many :city_vacancies, class_name: 'CityVacancy'
  has_many :vacancies, through: :city_vacancies

  # accepts_nested_attributes_for :vacancies
end
