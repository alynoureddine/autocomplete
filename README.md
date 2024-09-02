# autocomplete

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Explanation
The app is made up of a single page. The page contains two autocomplete components, one for cities and one for books. The user can type in the input field and the app will display the results that match the user's input. The app will display the results under the input field as soon as the user types at least 3 characters. If the user types less than 3 characters in the text field, the app will not output any results and will notify the user with a helpful message. If there are no results for the search, the app will let the user know. When the page loads the search field is selected automatically, so the user can start typing.

### Implementation
The app uses a simple store to store the datasets and query results. The store is a reactive object. The autocomplete components use the store to get the data and display the results.

The app consists of two main components: `CitiesSearch` and `BooksSearch`. They both use a base component `SearchBase` that contains the input field and the results list. The `CitiesSearch` and `BooksSearch` components extend the `SearchBase` component and provide the specific data and search logic for cities and books. They then pass on the list for the `SearchBase` component to display within a `Slot`. This allows the `SearchBase` component to be reused for different types of searches, without worrying about different data types and how to display them.