import { Button } from "../../../components/atoms/Button"

export const Card = ({ title, category, cost }) => {
    return (
        <article className="bg-white p-4 shadow-md relative flex flex-col justify-between gap-2">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="px-4 h-8 flex items-center justify-center text-purple-900 bg-purple-100 self-start rounded-full">{category}</p>
            <p className="font-medium">{cost}</p>

            <section className="w-full flex justify-between">
                <Button variant="ghost">
                    Editar
                </Button>

                <Button variant="ghost">
                    Excluir
                </Button>
            </section>
        </article>
    )
}

export default Card