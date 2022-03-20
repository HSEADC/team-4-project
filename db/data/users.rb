def create_user
    name = FFaker::NameRU.name.split(' ')
    User.create(
        name: name[0],
        surname: name[1],
        role: %i[employer adc].sample,
    )
end