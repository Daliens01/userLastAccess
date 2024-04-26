import React from 'react'
const ApiHook = (id)=>{
    const [data, setData] = React.useState([])
    const [count, setCount] = React.useState("");
    let controller = new AbortController();
    let signal = controller.signal;
    React.useEffect(()=>{
        const fetching = async()=>{
          
          const urlHilos = `https://user-api-steel.vercel.app/hilos`
          const dataHilos = await fetch(urlHilos,{signal}).then(response => response.json());
          if(dataHilos.map(e=>e.Value)>=20){
            controller.abort();
            controller.abort(signal.reason);
            setCount(signal.aborted)
          }else{
            const url = `https://user-api-steel.vercel.app/${id}`
            const datos = await fetch(url,{signal}).then(response =>response.json()).catch(e=>e.json())
            setData(datos)
          }
        }
          fetching()
      },[])

      return {data, count}
}

export {ApiHook}