class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :email,
             :contacts,
             :socials


  def email
    object.account.email
  end

  def contacts
    object.account.contacts || {}
  end

  def socials
    object.account.socials || {}
  end
end
