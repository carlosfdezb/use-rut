import { useState, useEffect } from 'react'

const clean = (rut) => {
  let master = rut.replace(/\./g,'').replace(/-/g,'').replace(/,/g,'').split('');
  let dv = master.pop();
  let cuerpo = master.join('');
  return {dv, cuerpo}
}

const validate = (cuerpo = 0, dv = 0) => {
  let verificador = dv === 'k' ? 10 : dv === 0 ? 11 : dv;
  let rut = cuerpo.toString() + verificador.toString();
  let suma = 0;
  let multiplo = 2;
  for (let i = 1; i <= cuerpo.length; i++) {
    let index = multiplo * rut.charAt(cuerpo.length - i);
    suma = suma + index;
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }
  return suma;
}

const format = (cuerpo) => {
  return cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const useRut = () => {
  const [rut, setRut] = useState('');
  const [original, setOriginal] = useState('');
  const [valido, setValido] = useState(false);
  useEffect(() => {
      let {dv, cuerpo} = clean(original.toLowerCase());
      let suma = validate(cuerpo, dv);
      let dvEsperado = 11 - (suma % 11);
      let final = format(cuerpo) + '-' + dv;
      if (dvEsperado === (dv === 'k' ? 10 : dv === '0' ? 11 : parseInt(dv)) && cuerpo.length > 6) { setValido(true) } else { setValido(false) }
      if(final !== '-undefined') { setRut(final) } else { setRut('') }
      console.log('esperado:',dvEsperado, 'obtenido:',dv === 'k' ? 10 : dv === '0' ? 11 : parseInt(dv))
  }, [original]);
    
  return [rut, valido, setOriginal];
}

export default useRut;