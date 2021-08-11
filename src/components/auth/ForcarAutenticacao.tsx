import Image from 'next/image'
import router from 'next/router'
import useAuth from '../../data/hook/UseAuth'
import imageLoading from '../../../public/images/loading.gif'
import Head from 'next/head'

export default function ForcarAutenticacao (props){
  const{ usuario, carregando } = useAuth()

    function renderizarConteudo (){
        return(
            <>
            <Head>
                <script 
                dangerouslySetInnerHTML={{
                    __html: `if(!document.cookie?.includes("admin-template")){window.location.href = "/autenticacao"}`
                }}
                />
            </Head>
            {props.children}
            </>
        )
    }
    function renderizarCarregando (){
        return(
            <div className ={`flex justify-center items-center h-screen`}>
            <Image src={imageLoading} alt="Loading"/>
            </div>
        )
    }
    // console.log(usuario)
   if(!carregando && usuario?.email){
       return renderizarConteudo()
   }else if(carregando){
       return renderizarCarregando()
   }else{
       router.push('/autenticacao')
       return null
   }
}