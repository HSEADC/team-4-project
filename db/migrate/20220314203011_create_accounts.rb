class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |t|
      t.string :image
      t.string :email
      t.string :description
      t.string :url
      t.string :type
      t.string :contacts
      t.integer :company_id
      t.integer :user_id

      t.timestamps
    end
  end
end
