# ExampleApp Angular CLI app running in a WebContainer

This is a demo that runs full Angular CLI in a [WebContainer](https://blog.stackblitz.com/posts/introducing-webcontainers/).





You can fork this repo to create fully featured Angular CLI apps — handy for demos or issue reproductions.





------------------------------- Known issues  ------------------------------------


While this demo works for common workflows, the WebContainer technology is still in beta, and the current CLI setup has some issues. Just to name a few:

- only Chrome is supported, for example Firefox and Safari, and even Chromium-based Brave are currently not
- `ngcc` runs from scratch after each reload, causing delay for the devserver startup.
- `src/app/app.component.css` isn't preserved correctly after a `ng new` scaffolds a new project (https://github.com/stackblitz/webcontainer-core/issues/109#issuecomment-854659697)

My hope is that once all the major issues are ironed out, we could convert all of angular.io examples to run in WebContainers: https://github.com/angular/angular/issues/42404

In the meantime, this StackBlitz can be forked and used for experimentation and  demos.

Step to recreate this StackBlitz project:

- start a new Node.js StackBlitz project
- `npm install -D @angular/cli`
- `rm index.js package.json`
- `ng new example-app --defaults --skip-git --directory .`
- `touch src/app/app.component.css`


-------------------------- Original CLI Readme ------------------------------------

# ExampleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
