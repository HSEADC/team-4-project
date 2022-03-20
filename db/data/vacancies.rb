def create_vacancies
    10.times do 
        username = Faker::Internet.username
        Vacancy.create(
            status: Vacancy::STATUS.keys.sample,
            title: Faker::Job.title,
            description: Faker::Lorem.paragraph(sentence_count: rand(2..5)),
            occupation_type: Vacancy::OCCUPATION_TYPE.keys.sample,
            remote: [true, false].sample,
            salary: rand(20_000..200_000),
            contacts: {
                behance: "behance.net/#{username}",
                insta: "@#{username}",
                tg: "@#{username}",
                vk: "vk.com/#{username}",
            },
            occupation_data: {},
            verified: [true, false].sample,
            account: Company.all.sample.account,
        )
    end
end



