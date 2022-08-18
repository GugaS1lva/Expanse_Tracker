import tw from "tailwind-styled-components/dist/tailwind"

export const TemplateContainer = tw.div`
    bg-gray-100 w-screen h-screen flex justify-center
`

export const TemplateContents = tw.section`
    w-full h-full max-w-screen-lg grid grid-cols-2
`

export const TemplateMainHeroSection = tw.main`
    flex flex-col justify-center items-center gap-20
`