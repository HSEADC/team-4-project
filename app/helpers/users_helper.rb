module UsersHelper
  def parsed_contacts(contacts_json)
    return [] if contacts_json.blank?
    
    JSON.parse(contacts_json)
  end

end
