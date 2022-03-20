class Account < ApplicationRecord
    TYPE = %i[user company]
    mount_uploader :image, ImageUploader
    has_one :company
    has_one :user
end
