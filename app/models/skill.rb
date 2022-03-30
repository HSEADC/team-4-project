class Skill < ApplicationRecord
  has_many :skill_vacancies, class_name: 'SkillVacancy'
  has_many :vacancies, through: :skill_vacancies

  accepts_nested_attributes_for :vacancies
end
