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
        mts: 'МТС'
    }.each do |key, value|
        account = create_account
        account.image = image_url(['logos', key]).open
        account.company = create_company(name: value)
        account.save
    end
end

def create_account
    username = Faker::Internet.username
    Account.create(
        email: "#{username}@gmail.com",
        url: "#{username}.com",
        description: Faker::Lorem.paragraph(sentence_count: rand(1..5)),
        contacts: {
            behance: "behance.net/#{username}",
            insta: "@#{username}",
            tg: "@#{username}",
            vk: "vk.com/#{username}",
        }
    )
end

def image_url(path)
    Pathname.new(Rails.root.join("db/images/#{path.join('/')}.svg"))
end