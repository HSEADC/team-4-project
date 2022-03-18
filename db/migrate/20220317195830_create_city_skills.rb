class CreateCitySkills < ActiveRecord::Migration[6.1]
  def change
    create_table :city_skills do |t|
      t.references :skills, null: false, foreign_key: true
      t.references :vacancies, null: false, foreign_key: true

      t.timestamps
    end
  end
end
