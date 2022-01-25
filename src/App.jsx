import React from "react";
import { Counter } from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss"
// Fragment -> tag sem nenhum conteúdo -> não produz nova div

export function App() {
    return(
        <> 
            <RepositoryList />
            <Counter />
        </>
    ) 
}