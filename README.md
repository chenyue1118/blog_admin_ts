#  blog-admin  base vue-typescript-admin-template

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Run your unit tests

```bash
yarn test:unit
```

### Run your end-to-end tests

```bash
yarn test:e2e
```

### Generate all svg components

```bash
yarn svg
```

## Related Project

[Armour/vue-typescript-admin-mock-server](https://github.com/armour/vue-typescript-admin-mock-server) (mock server for this project)

[Armour/vue-typescript-admin-docs](https://github.com/armour/vue-typescript-admin-docs) (documentation source for this project)

Javascript version:

[PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) (a vue2.0 minimal admin template)

[PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) (full features supported vue admin)

[PanJiaChen/electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin) (a vue electron admin project)

```
    server {
      listen       6002;
      server_name  blog_local;
      location ^~/apis/ {
        proxy_pass http://127.0.0.1:6601/;
        # proxy_pass http://182.61.175.203:6601/;
      }
      location / {
        proxy_pass http://127.0.0.1:6001;
      }
    }
```
