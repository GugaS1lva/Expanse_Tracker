import { Button } from "../components/atoms/Button"
import { InputText } from "../components/molecules/InputText"
import { Link } from "../components/molecules/Link"

const Login = () => {
    return (
        <div className="bg-gray-100 w-screen h-screen flex justify-center">
            <section className=" w-full h-full max-w-screen-lg grid grid-cols-2">
                <aside className="flex">
                    <img src="/pig-hero.svg" alt="Pig Hero" />
                </aside>

                <main className="flex flex-col justify-center items-center gap-20">
                    <h1 className="font-bold text-3xl">Controle Seus Gastos</h1>

                    <form className="flex flex-col w-full gap-5">
                        <InputText label="Email" type="email" name="email" id="iemail" />

                        <InputText label="Senha" type="password" name="password" id="ipassword" />

                        <Button>Log In</Button>
                    </form>

                    <Link href="/register">Criar Conta</Link>
                </main>
            </section>
        </div>
    )
}

export default Login