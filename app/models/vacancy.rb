class Vacancy < ApplicationRecord
    STATUS = { active: 'актуально', inactive: 'не актуально' }.freeze
    GRADE = { intern: 'стажер', junior: 'джуниор', middle: 'миддл', senior: 'сеньор'}.freeze
    OCCUPATION_TYPE = { full_time: 'полная занятость', part_time: 'частичная занятость', temporary: 'временная', internship: 'стажировка', project: 'проект' }.freeze

    belongs_to :account
    has_many :city_vacancies, class_name: 'CityVacancy'
    has_many :cities, through: :city_vacancies

    has_many :skill_vacancies, class_name: 'SkillVacancy'
    has_many :skills, through: :skill_vacancies

    # accepts_nested_attributes_for :skill_vacancies, :city_vacancies

    def company
      account.company
    end
end
