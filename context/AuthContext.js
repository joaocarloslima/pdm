import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user, setUser] = useState({})
    
    function logar(email, senha){
        if(email === "joao@sp.senac.br" && senha === "123"){
            setUser({
                nome: "Joao Carlos",
                email
            })
            return "ok"
        }

        if(email === "maria@sp.senac.br" && senha === "abc"){
            setUser({
                nome: "Maria da Silva",
                email
            })
            return "ok"
        }

        return "E-mail ou senha inválidos"
        
    }

    return(
        <AuthContext.Provider value={{user, logar}}>
            {children}
        </AuthContext.Provider>
    )
}