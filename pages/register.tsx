import { Button } from "../components/atoms/Button"
import { InputText } from "../components/molecules/InputText"
import { Link } from "../components/molecules/Link"
import { SidebarHero } from "../components/organism/SidebarHero"

import { 
    TemplateContainer, 
    TemplateContents,
    TemplateMainHeroSection,
} from "../components/templates"

const Register = () => {
    return (
        <TemplateContainer>
            <TemplateContents>
                <SidebarHero />

                <TemplateMainHeroSection>
                    <h1 className="font-bold text-3xl">Crie sua conta</h1>

                    <form className="flex flex-col w-full gap-5 max-w-xs">
                        <InputText label="Email *" type="email" name="email" id="iemail" />

                        <InputText label="Confirmar Email *" type="email" name="email" id="iemail" />

                        <InputText label="Senha *" type="password" name="password" id="ipassword" />

                        <Button>Criar Conta</Button>
                    </form>

                    <Link href="/login" className="hover:text-[#6C63FF]">Já possuo uma conta</Link>
                </TemplateMainHeroSection>
            </TemplateContents>
        </TemplateContainer>
    )
}

export default Register