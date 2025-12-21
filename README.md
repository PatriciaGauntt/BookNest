# BookNest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## About the BookNest Project

Welcome to Our BookNest—a warm, digital extension of the bookshelves in our home. Every location corresponds to a real room, and each bookshelf inside those rooms has been carefully numbered. This simple system lets you find any book by matching its room and shelf number to the map.

Instructions on how to find the location and bookcase are detailed in the overview page. Just locate the room, follow the numbering path around the walls, and you’ll always know exactly where a book belongs.

Whether you’re browsing for a favorite story or tracking down a new one, BookNest turns our home into a gentle, guided wander through our personal library.
Enjoy exploring—and happy reading!

## BookNest – Angular Frontend

BookNest is the Angular-powered frontend for our home library catalog.
It provides a clean, intuitive interface for browsing, searching, managing, and locating every book in our personal collection.
The app communicates with an Express/MongoDB backend API to perform all CRUD operations.

## Key Features

🔎 Advanced Book Search & Filtering — search by title, author, or series and filter by room/location at the same time

📊 Sortable & Paginated Results — sort books by title, author, or series (ascending/descending) and browse large collections with easy next/previous navigation

📘 Detailed Book Views — see complete book information, including room, bookcase, and shelf location

✏️ Create, Update, and Manage Books — add new books or edit existing entries directly from the UI

💬 Book Comments System — add and delete comments on individual books

📍 Location Mapping System — a structured room, bookcase, and shelf system that helps you find exactly where a book lives

🧭 Clear Navigation Flow — intuitive links between Home, Overview, Search, Details, Edit, and Comments

⚠️ Inline Validation & User Feedback — helpful hints and messages guide users when required fields are missing

♿ Accessibility-Friendly UI — semantic HTML and ARIA labels improve usability for screen readers

🧼 Clean, Consistent UI Design — shared styles, themed colors, and reusable components across the app

🚀 Fully Integrated Backend API — seamless communication with the BookNest backend for data persistence

## BookNest – Technology Stack

  Frontend
  - Angular — component-based framework
  - TypeScript — strongly typed JavaScript
  - HTML5 — semantic markup 
  - CSS3 — custom styling and layout
  - Bootstrap 5 — responsive UI components
  
  Backend
  - Node.js — JavaScript runtime
  - Express.js — REST API framework
  - MongoDB — document-based database
  - ES6+ JavaScript — core application logic

  Architecture & Patterns
  - RESTful API — GET, POST, PUT, DELETE
  - MEAN-style architecture
  - Client–Server separation

## 📘 Architecture Overview

Here is the navigation flow for the BookNest application:

![BookNest Flow Diagram](public/images/BookNest.jpg)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

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

<!---## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.--->

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

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
│  │  ├─ book-isbn-lookup
│  │  │  ├─ book-isbn-lookup.css
│  │  │  ├─ book-isbn-lookup.html
│  │  │  ├─ book-isbn-lookup.spec.ts
│  │  │  └─ book-isbn-lookup.ts
│  │  ├─ book-overview
│  │  │  ├─ book-overview.css
│  │  │  ├─ book-overview.html
│  │  │  ├─ book-overview.spec.ts
│  │  │  └─ book-overview.ts
│  │  ├─ book-resume
│  │  │  ├─ book-resume.css
│  │  │  ├─ book-resume.html
│  │  │  ├─ book-resume.spec.ts
│  │  │  └─ book-resume.ts
│  │  ├─ book-search
│  │  │  ├─ book-search.css
│  │  │  ├─ book-search.html
│  │  │  ├─ book-search.spec.ts
│  │  │  └─ book-search.ts
│  │  ├─ book-stack
│  │  │  ├─ book-stack.css
│  │  │  ├─ book-stack.html
│  │  │  ├─ book-stack.spec.ts
│  │  │  └─ book-stack.ts
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
