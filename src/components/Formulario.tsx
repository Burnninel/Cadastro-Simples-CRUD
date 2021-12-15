import { useState } from "react";
import Cliente from "../core/Cliente";
import Input from "./Input";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clientemudou?: (cliente: Cliente) => void
    cancelado?: () => void 
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    
    return (
        <div>
            {id ? (
                <Input 
                    somenteLeitura
                    texto="Código" 
                    valor={id}  
                    className="mb-5"

                />
                
            ) : false}
            <Input 
                texto="Nome"
                valor={nome}  
                valorMudou={setNome}
                className="mb-4"
            />
            <Input 
                texto="Idade" 
                tipo='number' 
                valor={idade}  
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-3">
                <Botao cor="blue" className="mr-2" onClick={() => props.clientemudou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={props.cancelado}>
                    Cancelar    
                </Botao>
            </div>
        </div>
    )
}               