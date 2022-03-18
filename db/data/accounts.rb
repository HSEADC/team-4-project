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
            image: 
            email: 
            description:
            url:
            type:
            contacts:
            company_id:
            user_id:
)
    
end