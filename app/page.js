'use client'
import { AboutSection } from "../components/mainSection/AboutSection";
import { StepsSection } from "../components/mainSection/StepsSection";
import { FloatButton } from 'antd';
import { OtzyvyComp } from "../components/mainSection/OtzyvyComp";
import { ModalUniversal } from "@/components/modal/ModalUniversal";
import { useState } from "react";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [isActive, setIsActive] = useState({
    consultation: false,
    tel: false
  });

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  const showModal = (title, active) => {
    setIsModalOpen(true)
    setTitle(title)
    if (active === "consultation") {
      setIsActive(prev => ({ ...prev, consultation: true, tel: false }))
    }
    if (active === "tel") {
      setIsActive(prev => ({ ...prev, consultation: false, tel: true, }))
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full min-h-screen bg-cover fon bg-center' />

      <section className='container mx-auto relative xz:pt-10 xs:pt-24'>
        <div className='flex justify-between sd:w-1/2 xz:w-full'>
          <div className='pt-20 text-white'>
            <h1 className='font-bold xs:text-3xl xz:text-xl uppercase'>
              Разработка документации, проектов и проведение измерений (испытаний) в сфере промышленной <span className='text-[#65BB1E]'>экологии</span> и  <span className='text-[#1C7397]'>санитарии</span>
            </h1>
            <h2 className="font-light mt-4 text-sm">
              Получение разрешений в сферах: атмосферного воздуха, отходов, водопотребления и водоотведения. Разработка и сопровождение проекта санитарно-защитной зоны при прохождении оценки риска здоровью населения и санитарно-гигиенической экспертизы. Паспортизация вентиляционных систем и проверка эффективности газоочистных установок для вновь вводимых и эксплуатируемых объектов.
            </h2>

            <p className='uppercase font-light xx:text-sm xz:text-xs mt-8 text-[#65BB1E]'>
              Индивидуальный подход к каждому заказчику
            </p>

            <div className="mt-12 flex xz:flex-col-reverse xs:flex-row xz:items-start">
              <button
                className='border border-[#1C7397] px-5 xz:mt-6 xs:mt-0 py-1 font-light rounded-2xl text-sm bg-[#1C7397]'
                onClick={() => showModal("Получить консультацию", "consultation")}
              >
                Получить консультацию
              </button>
              <button
                className='border border-[#65BB1E] xz:ml-0 xs:ml-5 px-5 py-1 font-light rounded-2xl text-sm bg-[#65BB1E]'
                onClick={() => showModal("Заказать звонок", "tel")}
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <StepsSection />

      <OtzyvyComp />

      <section className="relative bg-white w-full pb-20">
        <article className="container mx-auto ss:text-xl xz:text-lg text-center font-semibold text-[#65BB1E]">
          <p>
            Хотите быть в соответствии с экологическими требованиями без лишних проблем? Мы предлагаем разработку документации, проектов и проведение измерений в области промышленной экологии и санитарии. Мы поможем вам получить все необходимые разрешения и обеспечим сопровождение вашего проекта в санитарно-защитной зоне. Наша команда также проведет паспортизацию вентиляционных систем и проверит эффективность газоочистных установок. Вы сэкономите время и избежите штрафов от экологических инспекторов. Сделайте правильный выбор для своего предприятия, свяжитесь с нами сейчас и доверьте нам заботу о вашей документации и экологическом соответствии.
          </p>
        </article>
      </section>
      <ModalUniversal isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} isActive={isActive} />
      <FloatButton.BackTop />
    </main>
  )
};