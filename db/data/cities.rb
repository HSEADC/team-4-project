def create_cities
    %W[
        Москва
        Питер
        Ярославль
        Нижний\ Новгород
        Норильск
        Екатеринбург
        Тюмень
    ].each { |city| City.create(name: city) } 
end
