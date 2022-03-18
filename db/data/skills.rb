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
