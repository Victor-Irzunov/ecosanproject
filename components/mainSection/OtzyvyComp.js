import Image from "next/image";
import one from '../../public/otzyvy/one.webp';
import two from '../../public/otzyvy/two.webp';
import three from '../../public/otzyvy/3.webp';
import four from '../../public/otzyvy/4.webp';
import { Divider } from "antd";
import { useScreens } from "@/constants/constants";

export const OtzyvyComp = () => {
  const screens = useScreens()
  return (
    <section className='relative pb-12 w-full bg-white'>
      <article className='container mx-auto'>
        <h3 className='text-xl mb-4 uppercase'>
          Отзывы наших клиентов
        </h3>
        <div className="xs:text-sm xz:text-xs font-light text-justify">
          <p>
            Нашей компанией оказываются широкий спектр услуг в сфере промышленной экологии и санитарии. Она специализируется на разработке документации, проектов и проведении измерений (испытаний) с основной целью обеспечить клиентам соответствие требованиям экологических и санитарных нормативов. Мы гордимся результатами своей работы и хотим поделиться с вами несколькими благодарными письмами, которые отражают полное удовлетворение наших клиентов.
          </p>
          <p>
            Каждое благодарное письмо, которое мы получаем, свидетельствует о том, что наша работа является не просто выполнением задач, а созданием ценности для наших клиентов. Клиенты отмечают высокое качество наших услуг и уровень внимания, который мы уделяем каждому клиенту.
          </p>
          <p>
            Одной из основных услуг, которые мы предлагаем, является разработка документации и проектов, необходимых для получения разрешений в сферах атмосферного воздуха, отходов, водопотребления и водоотведения. Мы также занимаемся разработкой и сопровождением проекта санитарно-защитной зоны при прохождении оценки риска здоровью населения и санитарно-гигиенической экспертизы. Кроме того, мы специализируемся на паспортизации вентиляционных систем и проверке эффективности газоочистных установок для вновь вводимых и эксплуатируемых объектов.
          </p>
          <p>
            Благодаря нашему опыту и экспертизе, мы предлагаем клиентам надежное и профессиональное сопровождение на каждом этапе проекта. Мы понимаем, насколько важно обеспечить соответствие требованиям экологической безопасности и санитарным стандартам, и стремимся превзойти ожидания наших клиентов.
          </p>
          <p>
            Полученные отзывы подчеркивают наше уделяемое внимание деталям, нашу ответственность и преданность качеству. Они отражают удовлетворение наших клиентов и подтверждают, что мы делаем всё возможное, чтобы обеспечить им наилучший сервис и результаты.
          </p>
          <p>
            Мы гордимся нашими достижениями в области промышленной экологии и санитарии. Мы постоянно совершенствуем нашу методологию и технические навыки, чтобы быть во главе инноваций и предлагать передовые решения для наших клиентов.
          </p>
          <p>
            Наша команда экспертов, состоящая из квалифицированных специалистов, работает с самым высоким профессионализмом и вниманием к деталям. Мы понимаем, что каждый проект уникален и требует индивидуального подхода. Поэтому мы тщательно изучаем потребности и требования каждого клиента, чтобы предоставить им наилучшее решение, соответствующее их целям и ожиданиям.
          </p>
          <p>
            Наша задача не просто выполнять работу, но и строить долгосрочные отношения с клиентами, основанные на доверии и взаимном понимании. Мы глубоко ценим доверие, которое наши клиенты оказывают нам, и всегда стремимся превзойти их ожидания. В каждом проекте мы придерживаемся высоких стандартов качества, чтобы обеспечить полную удовлетворенность наших клиентов.
          </p>
          <p>
            Благодарные отзывы наших клиентов - это лучшая награда за нашу работу. Они подтверждают, что мы на правильном пути, и мотивируют нас продолжать улучшать наши услуги и стремиться к новым вершинам. Мы гордимся нашими клиентами и благодарим их за доверие, которое они оказывают нам.
          </p>
          <p>
            Продолжая свое путешествие в мир промышленной экологии и санитарии, мы обещаем нашим клиентам продолжать предоставлять высококачественные услуги, сохраняя нашу репутацию надежного и профессионального партнера. Наша цель - быть лидерами в нашей отрасли и содействовать созданию более экологически устойчивого и безопасного будущего для всех.
          </p>
        </div>
        <div className="flex justify-between items-center xz:flex-col ss:flex-row mt-8 mb-20">
          <div className="ss:w-1/4 xz:w-full ss:mr-1 xz:mr-0 xz:mb-2 ss:mb-0">
            <Image src={one} width={100} alt="отзыв"
              className="object-cover w-full border"
            />
          </div>
          <div className="ss:w-1/4 xz:w-full ss:mr-1 xz:mr-0 xz:mb-2 ss:mb-0">
            <Image src={two} width={screens.lg && 100} alt="отзыв"
              className="object-cover w-full border"
            />
          </div>
          <div className="ss:w-1/4 xz:w-full ss:mr-1 xz:mr-0 xz:mb-2 ss:mb-0">
            <Image src={three} width={screens.lg && 100} alt="отзыв"
              className="object-cover w-full border"
            />
          </div>
          <div className="ss:w-1/4 xz:w-full ss:mr-1 xz:mr-0 xz:mb-2 ss:mb-0">
            <Image src={four} width={screens.lg && 100} alt="отзыв"
              className="object-cover w-full border"
            />
          </div>
        </div>

        <Divider />
      </article>
    </section>
  )
}
