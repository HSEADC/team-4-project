class CitySkill < ApplicationRecord
  belongs_to :skills
  belongs_to :vacancies
end
