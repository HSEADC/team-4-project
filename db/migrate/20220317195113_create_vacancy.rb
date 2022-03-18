class CreateVacancy < ActiveRecord::Migration[6.1]
  def change
    create_table :vacancies do |t|
      t.string :status
      t.string :type
      t.string :grade
      t.string :title
      t.string :description
      t.jsonb :occupation_type
      t.boolean :remote
      t.string :salary
      t.jsonb :contacts
      t.jsonb :occupation_data
      t.boolean :verified
      t.integer :account_id
      t.timestamps
    end
  end
end
