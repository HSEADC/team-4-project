# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_17_195849) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "image"
    t.string "email"
    t.string "description"
    t.string "url"
    t.string "type"
    t.string "contacts"
    t.integer "company_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "city_skills", force: :cascade do |t|
    t.bigint "skills_id", null: false
    t.bigint "vacancies_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["skills_id"], name: "index_city_skills_on_skills_id"
    t.index ["vacancies_id"], name: "index_city_skills_on_vacancies_id"
  end

  create_table "city_vacancies", force: :cascade do |t|
    t.bigint "cities_id", null: false
    t.bigint "vacancies_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cities_id"], name: "index_city_vacancies_on_cities_id"
    t.index ["vacancies_id"], name: "index_city_vacancies_on_vacancies_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "title"
    t.boolean "verified"
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "image"
    t.string "title"
    t.string "url"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "surname"
    t.string "role"
    t.string "department"
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vacancies", force: :cascade do |t|
    t.string "status"
    t.string "type"
    t.string "grade"
    t.string "title"
    t.string "description"
    t.jsonb "occupation_type"
    t.boolean "remote"
    t.string "salary"
    t.jsonb "contacts"
    t.jsonb "occupation_data"
    t.boolean "verified"
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "city_skills", "skills", column: "skills_id"
  add_foreign_key "city_skills", "vacancies", column: "vacancies_id"
  add_foreign_key "city_vacancies", "cities", column: "cities_id"
  add_foreign_key "city_vacancies", "vacancies", column: "vacancies_id"
end
