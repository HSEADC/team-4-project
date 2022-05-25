class ChangeContactsFieldTypeForAccounts < ActiveRecord::Migration[6.1]
  def change
    change_column :accounts, :contacts, :json, using: 'contacts::JSON'
  end
end
