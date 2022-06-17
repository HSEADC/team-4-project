class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :surname,
             :full_name
             # :email

  def full_name
    object.name + ' ' + object.surname
  end

  # def avatar
  #   return rails_blob_path(object.avatar, only_path: true) if object.avatar.present?
  #   ''
  # end
end
