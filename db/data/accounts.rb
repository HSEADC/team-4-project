Account.create (
    image: 
    email: 
    description:
    url:
    type:
    contacts:
    company_id:
    user_id:
)

def create_accounts
    10 times do
        username = Faker::Internet.username
        Account.create (
            image: ,
            email: Faker::Email.email,
            description:
            url: 
            type: 
            contacts:
                behance: "behance.net/#{username}",
                insta: "@#{username}",
                tg: "@#{username}",
                vk: "vk.com/#{username}",
            company_id:
            user_id:
)
    
end