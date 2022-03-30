def create_skills
    %W[
        Фигма
        Скетч
        Иллюстратор
        Фотошоп
        Пеинт
        Блендер
        Руки
        UX
        UI
    ].each { |skill| Skill.create(name: skill) }
end

def create_skill_vacancies
  Vacancy.all.each do |vacancy|
    SkillVacancy.create(
      skill_id: Skill.all.sample.id,
      vacancy_id: vacancy.id
    )
  end
end
