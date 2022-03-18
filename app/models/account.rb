class Account < ApplicationRecord
    has_one :company
    has_one :user
end
