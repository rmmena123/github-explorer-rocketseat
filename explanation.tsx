// Superset do Javascript - adiciona um leque de funcionalidades a ele
// Tipagem dinâmica - permitir passar tipos de dados indesejados por parâmetro
// Faz checagem de tipos enquanto estamos desenvolvendo - em produção roda com Javascript
// Inferência de tipos - já consegue determinar os tipos de informações
type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state are ${user.address.state}`;
}

const message = showWelcomeMessage({
    name: "John Doe",
    email: "john@doe",
    address: {
        city: "San Francisco",
        state: "CA",
    }
})

// Cidade - UF