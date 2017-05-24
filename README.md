# kamvan

> Kanban Tamvan - A simple realtime kanban application

## File and Folder Structure

```bash
.
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist
│   ├── index.html
│   └── static
│       ├── css
│       ├── fonts
│       ├── img
│       └── js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── Auth.vue
│   │   ├── Board.vue
│   │   ├── BoardCard.vue
│   │   ├── BoardSection.vue
│   │   ├── CreateTeam.vue
│   │   ├── EditTeam.vue
│   │   ├── FormNewTask.vue
│   │   ├── FormSignIn.vue
│   │   ├── FormSignUp.vue
│   │   ├── MainApp.vue
│   │   └── TeamList.vue
│   ├── main.js
│   └── router
│       └── index.js
└── static
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
