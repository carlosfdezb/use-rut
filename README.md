# useRut hook

 A React Custom Hook that allows to format and verify Rut (Chilean DNI).

[![Edit use-rut](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-rut-5st12?file=/src/App.js)

## Installation
```
npm install use-rut
```

## How to use
```js
...
import useRut from 'use-rut';

function App() {
  const [rut, valido, setRut] = useRut();
  return (
    <div className="App">
      <input onChange={(e) => setRut(e.target.value)} value={rut}/>
      <h2>{`valido: ${valido}`}</h2>
    </div>
  );
}
```

### **:robot: Author**

_*Carlos Fernández*_

> You can follow me on
[github](https://github.com/carlosfdezb)

---

Copyright © 2021 [UseRut Hook](https://github.com/carlosfdezb/use-rut).

<p align="center">
  <a href="http://forthebadge.com/" target="_blank">
    <img src="http://forthebadge.com/images/badges/built-with-love.svg"/>
  </a>
</p>