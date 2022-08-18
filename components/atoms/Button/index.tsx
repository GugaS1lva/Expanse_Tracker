import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = ({ children, ...props }: Props) => {
    return (
        <button
            {...props}
            className="bg-[#2F2E41] text-white font-bold h-10 rounded-md hover:bg-[#6C63FF] disabled:bg-[#a1a1a1] disabled:cursor-not-allowed "
        >
            {children}
        </button>
    )
}