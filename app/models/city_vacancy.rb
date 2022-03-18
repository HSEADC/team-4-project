class CityVacancy < ApplicationRecord
  belongs_to :cities
  belongs_to :vacancies
end
