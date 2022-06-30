import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import imgUrl from "/src/assets/code-mockup.png";
import { useCreateSubscriberMutation } from "../graphql/generated";



export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()
  async function handleSubscriber(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-[5.5rem] mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong></h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias 
            mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded items-start flex-col box-border z-[1]">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscriber} className="flex flex-col gap-[0.625rem] w-full">
            <input type="text" 
            onChange={event => setName(event.target.value)}
            placeholder="Seu nome completo"
            className="bg-gray-900 rounded px-5 h-14"/>
            
            <input type="email" 
            onChange={event => setEmail(event.target.value)}
            placeholder="Digite seu email"
            className="bg-gray-900 rounded px-5 h-14"/>

            <button 
            disabled={loading}
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            type="submit">Garantir minha vaga</button>
          </form>
        </div>
      </div>

      <img src={imgUrl} />
      <img src="/src/assets/react-icon.png" alt="React Icon" className="mt-[0.625rem] absolute" />
    </div>
  )
}