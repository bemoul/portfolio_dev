import { Head } from '@inertiajs/react'
import { Button } from '../../inertia/css/@/components/ui/button'

export default function Home(props: { version: number }) {
  return (
    <>
    <Button>Click me!</Button>
      <Head title="Selim's Portfolio" />
      <div className="p-4">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>

        <span>
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
      </div>
    </>
  )
}