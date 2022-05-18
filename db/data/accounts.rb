%w[users companies].each do |file|
  require __dir__ + "/#{file}.rb"
end

def create_accounts
    # account for users
    (129..144).each do |id|
        account = create_account
        account.image = image_url(['avatars', "Frame #{id}"]).open
        account.user = create_user
        account.save
    end

    # account for companies
    {
        sberbank: 'Сбербанк',
        mts: 'МТС',
        anton: 'Антон',
        lamoda: 'Ламода',
        perekrestok: 'Перекресток',
        samokat: 'Самокат',
        tinkoff: 'Тиньков',
        vk: 'ВК',
        vtb: 'ВТБ',
        yandex: 'Яндекс',

    }.each do |key, value|
        account = create_account
        account.image = image_url(['logos', key]).open
        account.company = create_company(value)
        account.save
    end
end

def create_account
    username = Faker::Internet.username
    Account.create(
        password: 'testtest',
        email: "#{username}@gmail.com",
        url: "#{username}.com",
        description: Faker::Lorem.paragraph(sentence_count: rand(1..5)),
        contacts: {
            behance: "https://behance.net/#{username}",
            insta: "https://instagram.com/@#{username}",
            tg: "https://t.me/@#{username}",
            vk: "https://vk.com/#{username}",
        }.to_json,
        socials: {
          vk: 'https:/vk.com/id1',
          telegram: 'https://t.me/@random',
          youtube: 'https://youtube.com',
          behance: 'https://behance.com/',
          dribble: 'https://dribble.com',
          linkedln: 'https://linkedln.com',
          twitter: 'https://twitter.com',
        }
    )
end

def image_url(path)
    Pathname.new(Rails.root.join("db/images/#{path.join('/')}.svg"))
end
