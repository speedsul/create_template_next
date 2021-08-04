import useAppData from '../../data/hook/useAppData';
import { IconeAjustes, IconeCasa, IconeSair, IconeSino, IconeLuz } from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

export default function MenuLateral() {
  const {alternarTema, tema} = useAppData()
  return (
    <aside className={`flex flex-col 
    bg-gray-200 text-gray-900
    dark:bg-gray-900 dark:text-gray-200
    `}>
        <div className={`flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`}>
            <Logo />
        </div>
    <ul className={` flex-grow `}>
         <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
         <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
         <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
     </ul>
     <ul className={` `}>         
         <MenuItem onClick={alternarTema} texto={tema === '' ? 'Claro':'Escuro'} icone={IconeLuz} className={``} />
         <MenuItem onClick={(e)=>console.log("Saindo da Aplicação", e)} texto="Sair" icone={IconeSair} className={`text-red-600 hover:bg-red-400 hover:text-white dark:text-red-400 dark:hover:bg-gray-800 dark:hover:text-white`} />
     </ul>
    </aside>
  )
}
