import { createContext, useState } from 'react';
import route from 'next/router'
import firebase from '../../firebase/config';
import Usuario from './../../model/Usuario';
interface AuthContextProps {
    usuario: Usuario;
    loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

// async function UsuarioNormalizado(usuarioFirebase: firebase.User):Promise<Usuario>{
//  const token = await usuarioFirebase.getIdToken()
//  return {
//      uid:usuarioFirebase.uid,
//      nome: usuarioFirebase.displayName,
//      email: usuarioFirebase.email,
//      token,
//      provedor: usuarioFirebase.providerData[0]?.providerId,
//      imagemUrl: usuarioFirebase.photoURL
//  }
// }


export function AuthProvider(props:any) {
    const [usuario, setUsuario] = useState<Usuario>();

    async function loginGoogle() {
console.log("Login Google")
route.push('/')
    }

    return (
        <AuthContext.Provider
            value={{
                usuario,
                loginGoogle
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContext;
