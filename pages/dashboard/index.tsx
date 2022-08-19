import { Button } from "../../components/atoms/Button"
import { TemplateContainer } from "../../components/templates"
import { Card } from "../components/Card"

const Dashboard = () => {

    const cards = [
        { id: '1', title: 'Netflix', category: 'streaming', cost: 39.90 },
        { id: '2', title: 'Amazon', category: 'streaming', cost: 9.99 },
        { id: '3', title: 'Spotfy', category: 'music', cost: 19.90 },
        { id: '4', title: 'YTMusic', category: 'music', cost: 16.90 },
        { id: '5', title: 'LOL', category: 'game', cost: 0.00 },
    ]

    return (
        <TemplateContainer>
            <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6">
                <span className="font-bold text-2xl">Expanse Tracker</span>

                <nav className="flex gap-4">
                    <Button>Adicionar Nova Conta</Button>
                    <Button variant="ghost">Sair da Conta</Button>
                </nav>
            </header>

            <main className="w-full bg-purple-400 max-w-screen-lg h-5/6 grid overflow-y-scroll content-start grid-cols-3 gap-4 p-4 mb-10">
                {cards?.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        category={item.category}
                        cost={item.cost}
                    />
                ))}
            </main>
        </TemplateContainer>
    )
}

export default Dashboard