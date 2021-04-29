<p align="center">
 A React Custom Hook that allows to format rut (Chilean DNI), ** format only, does not check if it is valid or not **.
</p>

## Installation
```
npm install use-rut
```

## How to use
```js
...
import useRut from 'use-rut';

function App() {
  const [rut, setRut] = useRut();
  return (
    <div className="App">
        <input onChange={(e) => setRut(e.target.value)} value={rut}/>
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