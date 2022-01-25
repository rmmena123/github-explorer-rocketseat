import { RepositoryItem } from "./RepositoryItem";

// const repositoryName = "unform";  Fazer interpolação - {repositoryName}

const repository = {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}