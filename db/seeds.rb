require 'ffaker'
require 'faker'

%w[
  vacancies
  skills
  cities
  users
  companies
  accounts
].each do |file|
  require __dir__ + "/data/#{file}.rb"
end

create_accounts
create_cities
create_skills
create_vacancies
create_city_vacancies
create_skill_vacancies
