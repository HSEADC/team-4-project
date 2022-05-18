class AddSocialsToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :socials, :json
  end
end
