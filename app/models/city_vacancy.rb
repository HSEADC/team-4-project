class CityVacancy < ApplicationRecord
  belongs_to :city
  belongs_to :vacancy
end
