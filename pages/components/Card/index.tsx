import { Button } from "../../../components/atoms/Button"

export const Card = ({ title, category, cost }) => {
    return (
        <article className="bg-white p-4 shadow-md h-40 relative flex justify-between flex-col gap-2">
            <Button className="absolute top-0 right-0" variant="ghost">Excluir</Button>
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="px-4 h-8 flex items-center justify-center text-purple-900 bg-purple-100 self-start rounded-full">{category}</p>
            <p className="font-medium">{cost}</p>
        </article>
    )
}