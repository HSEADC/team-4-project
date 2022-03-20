def create_company(company_name)
    Company.create(
        name: company_name,
        verified: [true, false].sample
    )
end