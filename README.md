# BookNest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## BookNest – Angular Frontend

BookNest is the Angular-powered frontend for our home library catalog.
It provides a clean, intuitive interface for browsing, searching, managing, and locating every book in our personal collection.
The app communicates with an Express/MongoDB backend API to perform all CRUD operations.

## Features

🔎 Search Books by title, series, or author

📘 View Detailed Book Information including room, bookcase, and shelf

✏️ Update and Manage Books directly from the UI

💬 Add and Delete Comments on individual books

📍 Location Mapping System to help you find exactly where a book lives

🚀 Fully integrated with the BookNest backend API

## About the BookNest Project

Welcome to Our BookNest—a warm, digital extension of the bookshelves in our home. Every location corresponds to a real room, and each bookshelf inside those rooms has been carefully numbered. This simple system lets you find any book by matching its room and shelf number to the map.

Instructions on how to find the location and bookcase are detailed in the overview page. Just locate the room, follow the numbering path around the walls, and you’ll always know exactly where a book belongs.

Whether you’re browsing for a favorite story or tracking down a new one, BookNest turns our home into a gentle, guided wander through our personal library.
Enjoy exploring—and happy reading!

## Development server

To start a local development server, run:

```bash
ng serve
```

<!---Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.--->

### Backend Setup (Express App)

See README.md in https://github.com/PatriciaGauntt/booklists

```
Directory Tree of Project

BookNest
├─ .angular
├─ .editorconfig
├─ angular.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ images
├─ README.md
├─ src
│  ├─ app
│  │  ├─ app.config.ts
│  │  ├─ app.css
│  │  ├─ app.html
│  │  ├─ app.routes.ts
│  │  ├─ app.spec.ts
│  │  ├─ app.ts
│  │  ├─ book-comments
│  │  │  ├─ book-comments.css
│  │  │  ├─ book-comments.html
│  │  │  ├─ book-comments.spec.ts
│  │  │  └─ book-comments.ts
│  │  ├─ book-create
│  │  │  ├─ book-create.css
│  │  │  ├─ book-create.html
│  │  │  ├─ book-create.spec.ts
│  │  │  └─ book-create.ts
│  │  ├─ book-details
│  │  │  ├─ book-details.css
│  │  │  ├─ book-details.html
│  │  │  ├─ book-details.spec.ts
│  │  │  └─ book-details.ts
│  │  ├─ book-edit
│  │  │  ├─ book-edit.css
│  │  │  ├─ book-edit.html
│  │  │  ├─ book-edit.spec.ts
│  │  │  └─ book-edit.ts
│  │  ├─ book-home
│  │  │  ├─ book-home.css
│  │  │  ├─ book-home.html
│  │  │  ├─ book-home.spec.ts
│  │  │  └─ book-home.ts
│  │  ├─ book-overview
│  │  │  ├─ book-overview.css
│  │  │  ├─ book-overview.html
│  │  │  ├─ book-overview.spec.ts
│  │  │  └─ book-overview.ts
│  │  ├─ book-search
│  │  │  ├─ book-search.css
│  │  │  ├─ book-search.html
│  │  │  ├─ book-search.spec.ts
│  │  │  └─ book-search.ts
│  │  ├─ book.service.ts
│  │  ├─ book.ts
│  ├─ index.html
│  ├─ main.ts
│  ├─ proxy.conf.json
│  └─ styles.css
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```
