"use client"
import React, {useCallback} from 'react'
import Image from "next/image";
import styles from "../page.module.css";
import {Button,Select, SelectItem} from "@nextui-org/react";
import { useRouter ,useSearchParams } from 'next/navigation';
// import { Hilos } from '@/hooks/useHilos';
const HomePage = ()=>{
  const [select, setSelect] = React.useState("")
  // const [verificador, setVerificador] = React.useState("")
  // const count = Hilos(verificador)
  const router = useRouter()
  const searchParams = useSearchParams()
  const createQueryString = useCallback(
    (name, select) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, select)
      return params.toString()
    },[searchParams])
    
  const handleSubmit =(ruta)=>{
    // if (count ===404 ){
    //   alert("has alcanzado el limite de consultas. Espera media hora")
    // }else{
      router.push(`Routes/${ruta}` + '?' + createQueryString('id', ruta))
    // }
  }
    // console.log(count);
  
 return(<main className={styles.main}>
          <div className={styles.center}>
            <Image src="/esi.png" alt="esiapi Logo" width={458} height={150} priority/>
          </div>
          <div className={styles.grid + styles.center}>
          <div className="flex flex-wrap gap-4 items-center" style={{alignItems:"center"}}>
            <Select id="name" items={"lastaccess"}label="modalidad" placeholder="Selecciona una modalidad" className="max-w-xs" 
            onChange={e=>{setSelect(e.target.value);
            //  setVerificador("seleccionado")
             }}>
              <SelectItem key={"licenciatura"}>LICENCIATURA</SelectItem>
              <SelectItem key={"posgrado"}>POSGRADO</SelectItem>
            </Select>
            <Button  color="warning" onClick={()=>handleSubmit(select)} variant="solid">Ver tabla de {select} </Button>
          </div>
          </div>
        </main>)
}

export default HomePage