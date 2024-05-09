import { Head } from '@inertiajs/react'
import { Button } from '../../inertia/css/@/components/ui/button'
import { Header } from '~/components/Header'
import { Spacing } from '~/components/Spacing'
import { Hero } from '~/components/icons/Hero'

export default function Home(props: { version: number }) {
  return (
    <main>
      <Head title="Selim's portfolio" />
      <Header />
      <Spacing size="md" />
      <Hero />
    </main>
  )
}