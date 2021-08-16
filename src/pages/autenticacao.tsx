import { useState } from 'react';
import { IconeAtencao, IconeGoogle } from '../components/icons';
import useAuth from '../data/hook/UseAuth';
import AuthInput from './../components/auth/AuthInput';
export default function Autenticacao() {
    const [erro, setErro] = useState('');
    const [modo, setModo] = useState<'login' | 'cadastro'>('login');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {loginGoogle,login, cadastrarUsuario} = useAuth();

    function exibirErro(msg: string, tempo: number = 3) {
        setErro(msg);
        setTimeout(() => {
            setErro('');
        }, tempo * 1000);
    }

    async function submeter() {
      try{
        if (modo === 'login') {
           await login(email, senha)
        } else {
           await cadastrarUsuario(email, senha)
        }
      }catch(e){
        exibirErro(e.message)
      }
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img
                    className="h-screen w-full object-cover"
                    src="https://source.unsplash.com/random"
                    alt="Imagem de authenticação"
                />
            </div>
            <div className="md:w-1/2 w-full m-10 lg:w-1/3">
                <h1 className="text-xl font-bold mb-5 text-center uppercase">
                    {modo === 'login' ? 'Entre com seu login' : 'Cadastre na Plataforma'}
                </h1>
                {erro ? (
                    <div className="flex flex-col items-center justify-center bg-red-600 text-white p-1 rounded-lg border-2 border-red-900 text-center font-bold">
                        {IconeAtencao()}
                        <span className="">{erro}</span>
                    </div>
                ) : (
                    false
                )}
                <AuthInput
                    label="Email"
                    obrigatorio
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}
                />
                <AuthInput
                    obrigatorio
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                />
                <button
                    onClick={submeter}
                    className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6">
                    {modo === 'login' ? 'Entrar' : 'Cadastre-se'}
                </button>
                <hr className="my-6 border-gray-300 w-full" />

                <button
                    onClick={loginGoogle}
                    className=" flex items-center justify-center w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3">
                    <span className="flex w-8 h-8 mr-10 bg-white items-center content-center rounded-full">
                        {IconeGoogle}
                    </span>
                    Entrar com o google
                </button>
                {modo === 'login' ? (
                    <p className="cursor-pointer pt-5 text-blue-500 font-semibold">
                        <a onClick={() => setModo('cadastro')}>Crie uma conta gratuitamente</a>
                    </p>
                ) : (
                    <p className="cursor-pointer pt-5 text-blue-500 font-semibold">
                        <a
                            onClick={() => {
                                setModo('login');
                            }}>
                            Logar
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
}
