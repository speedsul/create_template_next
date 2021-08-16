import Link from 'next/link';
import useAuth from '../../data/hook/UseAuth';
const imageAvatar = '/images/avatar.png';
interface AvatarUsuarioProps {
    className?: string;
}
export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth();
    const avatar = usuario?.imagemUrl ? usuario?.imagemUrl : imageAvatar;
    return (
        <Link href="/perfil">
            <img
                className={`${props.className} cursor-pointer border-4 border-indigo-600 w-13 h-13 rounded-full hover:border-indigo-900`}
                width="60px"
                src={avatar}
                title="Acessar seu perfil"
                alt="Avatar do Usuario"
            />
        </Link>
    );
}
