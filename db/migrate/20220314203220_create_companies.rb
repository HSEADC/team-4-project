class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :title
      t.boolean :verified
      t.integer :account_id

      t.timestamps
    end
  end
end
