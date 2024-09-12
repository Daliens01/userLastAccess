import React from 'react'
import Tables from '../Tables'

export async function generateStaticParams(){
  return[
    {id:"licenciatura"},
    {id:"posgrado"}
  ]
}
const LastAccess = ({params})=>{
  const {id} = params
  return (<Tables id={id}/>)
}

export default LastAccess