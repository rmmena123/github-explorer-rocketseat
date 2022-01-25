// Hook -> gancho
import { useState } from "react";

export function Counter() {
    // React não monitora mudanças de variáveis para renderizar na tela
    // Estado -> variáveis que são monitoradas os seus estados para renderização, olha só para elas
    // [ , ] - Desestruração
    const [counter, setCounter] = useState(0);
    
    function increment() {
        setCounter(counter + 1);
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