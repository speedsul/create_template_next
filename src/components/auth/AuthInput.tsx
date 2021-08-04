interface AuthInputProps {
    label: string;
    valor: any;
    obrigatorio?: boolean;
    tipo?: 'text' | 'email' | 'password';
    naorenderizarQuando?: boolean;
    valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
    return props.naorenderizarQuando ? null : (
        <div className="flex flex-col mt-4 ">
            <label>{props.label}</label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={(e) => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
                className={`px-4 py-3 rounded border-2 border-indigo-500 bg-gray-200 mt-2 focus:outline-none focus:border-blue-500 focus:bg-white`}
            />
        </div>
    );
}
