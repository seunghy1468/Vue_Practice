# test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Life cycle

1. beforeCreate
   - 가장 먼저 실행 됨
   - vue component 내에서 화면상에 랜더링되는 무언가를 코드로 만들어서 사용함
2. created
   - 옵션에 대한 설정을 완성하는 시점
   - db call하고 data를 가져옴
3. beforeMount
   - 실제 component가 DOM에 추가되기 직전에 실행됨
4. Mounted
   - component가 DOM에 추가 된 후 실행됨
5. beforeUpdate
   - 데이터가 변형되면 재랜더링이 실행된다
   - 그 때, 재랜더링 되기 직전에 일어나는 hook
   - 5번과 6번 실행됨
6. updated
   - 재랜더링이 된후 일어나는 hook
7. beforeDestroy
   - 실제 component를 빠려나갈 때, 다른 component로 이동할 때 DOM안의 component가 제거되기 직전에 실행되는 hook
8. destroyed
   - component가 제거되고 난 뒤 실행되는 hook
