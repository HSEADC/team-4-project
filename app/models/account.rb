class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  TYPE = %i[user company]
  mount_uploader :image, ImageUploader
  has_one :company
  has_one :user
  has_many :vacancies

  store_accessor :socials,
    :vk, :telegram, :dribble, :behance, :youtube, :twitter, :linkedln

  accepts_nested_attributes_for :user, :company
end
