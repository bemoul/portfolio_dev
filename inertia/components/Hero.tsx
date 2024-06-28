import { Section } from "./Section"

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4 font-['Geist-Regular']">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Selim Ramdani</h2>
        <h3 className="text-3xl items-start gap-4">Développeur Web</h3>
        <p>Je suis un développeur fullstack passionné par les technologies du web. Je travaille actuellement comme développeur d'applications chez Mediapole où je participe à de nombreux projets.</p>
      </div>
      <div className="flex-[1.5] max-md:m-auto ml-auto">
        <img
          src="https://i.ibb.co/sbjm27m/Capture-d-cran-2024-06-11-224619.png"
          className="w-full h-auto max-w-xs border border-accent rounded-full shadow-lg max-md:w-40 object-cover"
          alt="selim's picture"
        />
      </div>
    </Section>
  )
}