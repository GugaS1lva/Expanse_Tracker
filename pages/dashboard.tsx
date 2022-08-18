import { Button } from "../components/atoms/Button"
import { TemplateContainer } from "../components/templates"

const Dashboard = () => {
    return (
        <TemplateContainer>
            <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6">
                <span className="font-bold text-2xl">Expanse Tracker</span>

                <nav className="flex gap-4">
                    <Button>Adicionar Nova Conta</Button>
                    <Button variant="ghost">Sair da Conta</Button>
                </nav>
            </header>
        </TemplateContainer>
    )
}

export default Dashboard