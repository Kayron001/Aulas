import Titulo from "./Titulo";

interface LayoutProps {
       // quando você define as propriedade de um componete, você fica obrigado a usar elas
    // a não ser que você escreva da seguinte forma 'titulo?: 'tipo-propriedade'
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}