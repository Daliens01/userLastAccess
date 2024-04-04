import React from 'react'
const ApiHook = (id)=>{
    const [data, setData] = React.useState([])
    let controller = new AbortController();
    let signal = controller.signal;
    React.useEffect(()=>{
        const fetching = async()=>{
          const url = `https://user-api-steel.vercel.app/${id}`
          const datos = await fetch(url,{signal}).then(response =>response.json()).catch(e=>e.json())
          setData(datos)
        }
          fetching()
      },[])

      return data
}

export {ApiHook}