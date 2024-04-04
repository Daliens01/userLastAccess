import React from 'react';
import Contexto from './context';

function  ContextProvider ({children}){
    return(
        <Contexto.Provider value={{}}>
        {children}
        </Contexto.Provider>
    )
}

export default ContextProvider