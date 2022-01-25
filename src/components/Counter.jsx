// Hook -> gancho
import { useState } from "react";

// Imutabilidade = nunca terá seu valor alterado, sempre irá receber um novo valor
// usuarios = ["diego", "rafael"]
// usuarios.push("rodrigo") -> Alterando na memória -> mutação no valor original
// novoUsuarios = [...usuarios, "rodrigo"] -> Criação de novo espaço na memória -> imutabilidade

export function Counter() {
    // React não monitora mudanças de variáveis para renderizar na tela
    // Estado -> variáveis que são monitoradas os seus estados para renderização, olha só para elas
    // [ , ] - Desestruração
    const [counter, setCounter] = useState(0);
    
    function increment() {
        setCounter(counter + 1); // Imutabilidade -> counter + 1
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}