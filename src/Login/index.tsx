import { Button } from "../../components/atoms/Button"
import { InputText } from "../../components/molecules/InputText"
import { Link } from "../../components/molecules/Link"
import { SidebarHero } from "../../components/organism/SidebarHero"

import { 
    TemplateContainer, 
    TemplateContents,
    TemplateMainHeroSection,
} from "../../components/templates"

const Login = () => {
    return (
        <TemplateContainer>
            <TemplateContents>
                <SidebarHero />

                <TemplateMainHeroSection>
                    <h1 className="font-bold text-3xl">Acesse sua conta</h1>

                    <form className="flex flex-col w-full gap-5 max-w-xs">
                        <InputText label="Email" type="email" name="email" />

                        <InputText label="Senha" type="password" name="password" />

                        <Button>Entrar</Button>
                    </form>

                    <Link href="/register" className="hover:text-[#6C63FF]">Criar conta</Link>
                </TemplateMainHeroSection>
            </TemplateContents>
        </TemplateContainer>
    )
}

export default Login