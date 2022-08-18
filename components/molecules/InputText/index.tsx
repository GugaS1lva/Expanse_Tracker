import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const InputText = ({ label, ...props }: Props) => {
    return (
        <label className="flex flex-col w-full">
            <span>{label}</span>
            <input {...props} className="border border-gray-300 h-10 px-4 rounded-md" />
        </label>
    )
}