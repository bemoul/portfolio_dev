import { Head } from '@inertiajs/react'
import { Header } from '~/components/Header'
import { Skills } from '~/components/Skills'
import { Spacing } from '~/components/Spacing'
import { Status } from '~/components/Status'
import { Hero } from '~/components/Hero'
import { HowCanIHelp } from '~/components/HowCanIHelp'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Selim Ramdani : Portfolio</title>
        <meta head-key="description" name="description" content="Développeur Web spécialisé dans la création d'applications Web. Passionné et disponible pour travailler sur vos projets. " />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="https://i.ibb.co/X2GtTjk/sm.png" />
      </Head>

      <Header />

      <Spacing size="md" />

      <Hero />

      <Spacing size="md" />

      <Status />

      <HowCanIHelp />

      <Skills />

      <Spacing size="md" />
    </main>
  )
}