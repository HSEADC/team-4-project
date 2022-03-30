CITIES = %W[
  Москва
  Питер
  Ярославль
  Нижний\ Новгород
  Норильск
  Екатеринбург
  Тюмень
]

def create_cities
    CITIES.each { |city| City.create(name: city) }
end

def create_city_vacancies
  Vacancy.all.each do |vacancy|
    CityVacancy.create(
      city_id: City.all.sample.id,
      vacancy_id: vacancy.id
    )
  end
end
