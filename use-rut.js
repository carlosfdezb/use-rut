import { useState, useEffect } from 'react'

const useRut = () => {
    const [rut, setRut] = useState('');
    const [original, setOriginal] = useState('');
    useEffect(() => {
        const master = original.replace(/\./g,'').replace(/-/g,'').replace(/,/g,'').split('');
        const verficador = '-'+master.pop();
        const numeros = master.join('').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        const data = numeros + verficador;
        if(data !== '-undefined') { setRut(data) } else { setRut('') }
      }, [original]);
      
    return [rut, setOriginal];
}

export default useRut;