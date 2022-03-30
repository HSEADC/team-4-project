class CreateCityVacancies < ActiveRecord::Migration[6.1]
  def change
    create_table :city_vacancies do |t|
      t.references :city, null: false, foreign_key: true
      t.references :vacancy, null: false, foreign_key: true

      t.timestamps
    end
  end
end
