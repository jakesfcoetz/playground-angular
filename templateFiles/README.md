# Angular playground

Playground that contains various angular projects including `eslint` and `prettier` configurations.

## Requirements

Firstly install the latest LTS version of [Node.js](https://nodejs.org/en/download/)

Run in the terminal:

- `npm install -g @angular/cli` to install angular globaly

## Getting started

Run in the terminal:

- `ng new my-app-name` to create a new angular app with the name "my-ap-name"
- `cd my-app-name` to change directory into the newly created app

## Optional instalations / setup

- Copy `.vscode/settings.json` from `templateFiles` on the main branch
- Copy `.prettierrc.json` from `templateFiles` on the main branch

Run in the terminal:

- `ng lint` and follow the setup prompts to be able to run linting
- `npm install -D prettier` to install prettier code formatter

Recommended VSCode extensions

- `Angular.ng-template` - Editor services for Angular templates
- `dbaeumer.vscode-eslint` - Integrates ESLint JavaScript into VS Code
- `esbenp.prettier-vscode` - Code formatter using prettier
- `streetsidesoftware.code-spell-checker` - Spelling checker for source code
- `oderwat.indent-rainbow` - Makes indentation easier to read

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. (shorthand `ng g <c|d|p|...> <name>`)

## Lint

Run `ng lint` to run eslint and possibly display any linting errors.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
