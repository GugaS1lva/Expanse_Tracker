import { ButtonHTMLAttributes, ReactNode } from "react"
import tw from "tailwind-styled-components/dist/tailwind"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: 'ghost'
}

export const Button = ({ children, variant, ...props }: Props) => {
    if (variant === 'ghost') return (
        <GhostButton {...props} className="">
            {children}
        </GhostButton>
    )

    return (
        <MainButton {...props} className="">
            {children}
        </MainButton>
    )
}

export const BaseButton = tw.button`
    px-8 text-white font-bold h-10 rounded-md disabled:bg-[#a1a1a1] disabled:cursor-not-allowed
`

export const MainButton = tw(BaseButton)`
    bg-[#2F2E41] hover:bg-[#6C63FF]
`

export const GhostButton = tw(BaseButton)`
    bg-gray-50 text-gray-500 border border-gray-300 hover:bg-white hover:text-black
`