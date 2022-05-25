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

  store_accessor :contacts,
    :link_1, :link_2, :link_3

  accepts_nested_attributes_for :user, :company

  after_initialize :set_socials_defaults

  private

  def set_socials_defaults
    return if !new_record? || self.socials.present?

    self.socials = {
      vk: nil,
      telegram: nil,
      dribble: nil,
      behance: nil,
      youtube: nil,
      twitter: nil,
      linkedln: nil
    }
  end

  def set_contacts_defaults
    return if !new_record? || self.contacts.present?

    self.contacts = {
      link_1: nil,
      link_2: nil,
      link_3: nil
    }
  end
end
