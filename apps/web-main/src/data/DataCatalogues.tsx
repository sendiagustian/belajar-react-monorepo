import { CatalogueModel } from "./CatalogueModel";

export const catalogues: CatalogueModel[] = [
    {
        route: "http://localhost:5511",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "React Essential",
        subtitle: "A simple React Essential.",
        linkProject: "https://github.com/sendiagustian/belajar-react-monorepo/tree/main/apps/react-essentials",
    },
    {
        route: "http://localhost:5512",
        image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Tic Tac Toe",
        subtitle:
            "A simple tic tac toe game.",
        linkProject: "https://github.com/sendiagustian/belajar-react-monorepo/tree/main/apps/tic-tac-toe",
    },
];
