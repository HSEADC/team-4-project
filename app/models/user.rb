class User < ApplicationRecord
    belongs_to :account
    has_many :posts

    accepts_nested_attributes_for :account

    def full_name
      "#{name} #{surname}"
    end

    def dribble
      JSON.parse(account.contacts.to_s)&.dig('dribble')
    end

    def youtube
      JSON.parse(account.contacts.to_s)&.dig('youtube')
    end

    def twitter
      JSON.parse(account.contacts.to_s)&.dig('twitter')
    end

    def linkedln
      JSON.parse(account.contacts.to_s)&.dig('linkedln')
    end

    def to_param
      name
    end
end
