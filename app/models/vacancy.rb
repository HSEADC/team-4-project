class Vacancy < ApplicationRecord
    STATUS = { active: 'актуально', inactive: 'не актуально' }.freeze
    TYPE = { vacancy: 'вакансия', project: 'проект' }.freeze
    GRADE = { intern: 'стажер', junior: 'джун', middle: 'мид', senior: 'сеньор'}.freeze
    OCCUPATION_TYPE = {full_time: 'полная занятость', part_time: 'частичная занятость', temporary: 'временная', internship: 'стажировка'}.freeze
    

    belongs_to :account
end
