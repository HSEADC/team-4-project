
Vacancy.create(
    status: ,
    type: ,
    title: Faker::Job.title,
    description:
    occupation_type: Faker::Job.employment_type,
    remote:
    salary:
    contacts:
    occupation_data:
    verified:
    account_id:
)

def create_vacancies
    10.times do 
        username = Faker::Internet.username
        Vacancy.create(
            status: Vacancy::STATUS.keys.sample,
            type: Vacancy::TYPE.keys.sample,
            title: Faker::Job.title,
            description: Faker::Lorem.sentence(word_count: rand(8..20)),
            occupation_type: Vacancy::OCCUPATION_TYPE.keys.sample,
            remote: [true, false].sample,
            salary: rand(20_000..200_000)
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



