# Webpack Template

Готовый шаблон JavaScript-проекта с настроенным окружением для сборки, тестирования, линтинга и автоматических проверок на GitHub.

Репозиторий настроен как **GitHub Template Repository** и предназначен для быстрого создания новых учебных JavaScript-проектов.

## Что входит

- **Webpack 5** — development- и production-сборка;
- **Babel 8** — транспиляция JavaScript;
- **Core-js** — полифиллы;
- **Jest 30** — тестирование и отчёт о покрытии;
- **ESLint 10** — статический анализ кода;
- **Husky 9** — проверки перед коммитом;
- **GitHub Actions** — CI для `push` и `pull_request` в `main`;
- **Dependabot** — автоматическая проверка обновлений зависимостей;
- **Browserslist** — список поддерживаемых браузеров;
- **EditorConfig** — единые настройки форматирования файлов;
- **Git attributes** — нормализация текстовых файлов;
- **MIT License**.

CodeQL для этого репозитория включён через GitHub **default setup**.

## Требования

- Node.js 26
- npm

## Использование шаблона

На странице репозитория нажмите **Use this template → Create a new repository**.

После создания нового репозитория клонируйте его:

```bash
git clone https://github.com/USERNAME/PROJECT-NAME.git
cd PROJECT-NAME
```

Установите зависимости:

```bash
npm install
```

После этого замените `PROJECT-NAME` в `package.json` на имя нового проекта. Также обновите ссылки в полях:

- `repository.url`;
- `bugs.url`;
- `homepage`.

Основной файл проекта:

```text
src/index.js
```

## Команды

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Development-сборка |
| `npm run prod` | Production-сборка |
| `npm test` | Запуск Jest |
| `npm run coverage` | Запуск Jest с отчётом о покрытии |
| `npm run lint` | Проверка ESLint |

Production-сборка создаётся в директории `dist/`.

## Тестирование

Jest собирает покрытие для JavaScript-файлов внутри `src/`, исключая тесты из `__tests__`.

Для покрытия строк установлен глобальный порог:

```text
100%
```

Названия отдельных тестов выводятся благодаря `verbose: true`.

> В самом шаблоне тестов нет. Поэтому `npm test` и `npm run coverage` завершаются с ошибкой `No tests found`, пока в созданный проект не будет добавлен хотя бы один тест.

## Husky

Перед каждым коммитом выполняются:

```bash
npm test && npm run lint
```

Это позволяет не отправлять в репозиторий изменения с падающими тестами или ошибками ESLint.

## CI

Workflow `.github/workflows/node-ci.yml` запускается при:

- `push` в `main`;
- `pull_request` в `main`.

CI выполняет:

```text
npm ci
npm run coverage
npm run lint
npm run prod
```

В GitHub Actions используется Node.js 26. Husky в CI отключён через `HUSKY=0`, поскольку необходимые проверки запускаются отдельными шагами workflow.

## Dependabot

Dependabot проверяет обновления:

- npm-зависимостей — **раз в неделю**;
- GitHub Actions — **раз в месяц**.

## CodeQL

В этом репозитории CodeQL работает через **GitHub default setup**, поэтому отдельного файла CodeQL workflow в `.github/workflows/` нет.

После создания нового проекта из шаблона рекомендуется проверить **Settings → Security → Code security**, если CodeQL нужен и в новом репозитории.

## Структура

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
├── .prettierignore
├── babel.config.js
├── eslint.config.js
├── jest.config.js
├── package.json
├── webpack.config.js
├── LICENSE
└── README.md
```

## Дополнительно

- `dist/`, `coverage/` и `node_modules/` исключены из Git;
- ESLint игнорирует `dist/` и `coverage/`;
- `.gitattributes` содержит `* text=auto` для нормализации текстовых файлов;
- Browserslist использует конфигурацию `defaults`;
- `.prettierignore` присутствует, но **Prettier сейчас не установлен** в зависимостях шаблона.

## Лицензия

MIT
