import { Button } from "../../../components/atoms/Button"
import { InputText } from "../../../components/molecules/InputText"
import { Link } from "../../../components/molecules/Link"
import { SidebarHero } from "../../../components/organism/SidebarHero"

import {
    TemplateContainer,
    TemplateContents,
    TemplateMainHeroSection,
} from "../../../components/templates"

const DashboardAdd = () => {
    return (
        <TemplateContainer>
            <TemplateContents>
                <SidebarHero />

                <TemplateMainHeroSection>
                    <h1 className="font-bold text-3xl">Cadastre nova despesa</h1>

                    <form className="flex flex-col w-full gap-5 max-w-xs">
                        <InputText label="Despesa" type="text" name="text" />

                        <InputText label="Categoria" type="text" name="text" />

                        <InputText label="Valor" type="number" name="number" />

                        <Button>Cadastrar</Button>
                    </form>

                    <Link href="/dashboard" className="hover:text-[#6C63FF]">Voltar</Link>
                </TemplateMainHeroSection>
            </TemplateContents>
        </TemplateContainer>
    )
}

export default DashboardAdd