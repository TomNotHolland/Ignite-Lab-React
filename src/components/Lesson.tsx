import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface properties {
  title: string,
  slug: string,
  availability: Date,
  type: 'live' | 'class'
}

export function Lesson(lesson: properties ) {
  const { slug } = useParams<{ slug: string }>()

  const LessonAvailability = isPast(lesson.availability)
  const DateFormat = format(lesson.availability, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
    locale: ptBR
  })

  const currentLesson = slug === lesson.slug

  return (
    <Link to={`/event/lesson/${lesson.slug}`} className="group">
      <span className="text-gray-300">
        {DateFormat}
        </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500' : currentLesson
      })}>
        <header className="flex items-center justify-between">
          {LessonAvailability ? (
            <span className={classNames('text-sm font-medium flex items-center gap-2',{
              'text-white': currentLesson,
              'text-blue-500': !currentLesson
            })}>
            <CheckCircle size={20}/>
            Conteúdo liberado
            </span>
          ) : (
            <span className={classNames('text-sm font-medium flex items-center gap-2',{
              'text-white': currentLesson,
              'text-orange-500': !currentLesson
            })}>
            <Lock size={20}/>
            Em breve
            </span>
          )}
          <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold',{
            'border-white' : currentLesson,
            'border-green-300' : !currentLesson
          })}>
            {lesson.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </span>
        </header>

        <strong className={classNames('mt-5 block', {
          'text-white': currentLesson,
          'text-gray-200': !currentLesson,
        })}>
          {lesson.title}
          </strong>
      </div>
    </Link>
  )
}