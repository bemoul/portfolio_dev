import { Head } from '@inertiajs/react'
import { Header } from '~/components/Header'
import { Skills } from '~/components/Skills'
import { Spacing } from '~/components/Spacing'
import { Status } from '~/components/Status'
import { Hero } from '~/components/Hero'
import { Section } from '~/components/Section'
import { HowCanIHelp } from '~/components/HowCanIHelp'

export default function Home() {
  return (
    <main>
      <Head title="Selim's portfolio" />

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