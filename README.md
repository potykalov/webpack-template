# Webpack Template

Минимальный шаблон JavaScript-проекта с настроенным окружением для разработки, тестирования и автоматических проверок.

## Что входит

- Webpack
- Babel
- Core-js
- Jest
- ESLint
- Husky
- GitHub Actions CI
- Dependabot
- CodeQL
- EditorConfig
- Browserslist

## Начало работы

Создайте новый репозиторий на основе этого шаблона, затем клонируйте его:

```bash
git clone https://github.com/USERNAME/PROJECT-NAME.git
cd PROJECT-NAME
```

Установите зависимости:

```bash
npm install
```

После создания проекта измените его имя в `package.json`:

```json
{
  "name": "PROJECT-NAME"
}
```

## Команды

### Сборка для разработки

```bash
npm run dev
```

### Production-сборка

```bash
npm run prod
```

Готовая сборка создаётся в директории `dist`.

### Запуск тестов

```bash
npm test
```

### Проверка покрытия тестами

```bash
npm run coverage
```

### Проверка ESLint

```bash
npm run lint
```

## Структура проекта

```text
.
├── .github/
│   ├── workflows/
│   │   └── node-ci.yml
│   └── dependabot.yml
├── .husky/
│   └── pre-commit
├── src/
│   └── index.js
├── .browserslistrc
├── .editorconfig
├── .gitattributes
├── .gitignore
├── babel.config.js
├── eslint.config.js
├── jest.config.js
├── package.json
└── webpack.config.js
```

## CI

GitHub Actions автоматически запускает проверки при `push` и `pull request` в ветку `main`:

```text
npm ci
npm run coverage
npm run lint
npm run prod
```

## Обновление зависимостей

Dependabot автоматически проверяет обновления:

- npm-зависимостей — раз в неделю;
- GitHub Actions — раз в месяц.

## Лицензия

MIT
