import Link from 'next/link'

export default function Home() {
  return (
    <div className="m-10 max-w-md">
      <h1 className="text-3xl font-bold">MaquetandoAndo</h1>
      <p className="mt-3">Proyecto donde replico los diseños de la página <a href="https://uidesigndaily.com">https://uidesigndaily.com</a> utilizando NextJS y TailwindCSS.</p>

      <h3 className="mt-10 text-2xl font-semibold">Componentes</h3>

      <ul className="mt-5">
        <li>
          <Link href="modal/">
            <a>Modal</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
