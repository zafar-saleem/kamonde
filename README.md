## Introduction

`Kamonde` is a project that tests react router dom to navigate between different pages such as `Home`, `Framework` & `Modeler`. It also tests to do a real time text base search on `Frameworks` page. Whereas the Modeler page renders initiated part of Modeler pacakge alongside `h1` title.

On this occasion, I decided to use `vite` instead of `CRA` due to its less reliability as it is no longer maintained by it's core team. `CRA` also throws countless warnings due to outdated dependencies while creating an app using.

Second reason for using `vite` is that it provides better developer experience due to its ligthening fast performance.

I decided to use `TypeScript` instead of JavaScript(as the project on `codepen` was in JavaScript) to make this project typesafe which allows to avoid common errors which could lead to potential bugs on production.

1. components
2. pages
3. theme

### components

`components/` folder consist of `Navigation`, `Pages` & `utils`. `utils` components are utility components and in this small example it is main `Flex` which I decided them to be simple rather than making them over-complicated. It could easily be evolved if such projects grow in size and new use-cases are introduced etc.

The `Navigation` component consist of main navigation for the entire project.

`pages` component consist of all components to their specific `page` which in this case only `Frameworks` page is complicated and I sub-divide it in further multiple sub-components such as `ListItems` and `SearchInput`.

### pages

I decided to use `lifting the stat up` concept instead of going for using state base application such as `context api`, `redux`, or `mobx`. As it is a relatively simple task and such concepts would have made this task over-complicated.

Since in this project only `Frameworks` page is slightly complicated and that is where I used the above concept which gets list of items from `items.tsx` file and process it for text based search.

### theme

I used a design system using `styled-components` which can be found in `src/theme` folder. This approach is better for having a consistent design throughtout the application and for organisation branding. You can find all the global variables inside `theme` in their respective folders.

### Other tools

Below are some additional tools that concerns `quality`.

1. husky (for pre-commit & pre-push hooks)
2. commitlint
3. eslist

## How to run

To install dependencies use below commands.

```bash
cd kamonde
yarn
```

To run locally.

```bash
yarn dev
```

To build

```bash
yarn build
```

To run lint

```bash
yarn lint
```
## Here is how it looks like.

https://cozy-chimera-25568e.netlify.app/

**Disclaimer**

I modified the `items.tsx` file and added additional attributes such as `likes` & `downloads`. This is just to add some additional information on cards on `Frameworks` page.

Moreover, I couldn't grasp the `Modeler` instance to be rendered in `Modeler` page. I simply initialized in the page and rendered it after `h1` which is simply an `object`. In real world and production project I would rather communicate with the stack holders to completely understand my task before starting working on it or deploying to production.

I decided to implement this project outside of `CodeSandBox` as this approach would give slightly better idea to reviewers the process of my working on this project.

## Contributors

1. [@zafar-saleem](https://github.com/zafar-saleem)
