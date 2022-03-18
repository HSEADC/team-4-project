class Company < ApplicationRecord
    belongs_to :account
    has_many :vacancies
end
