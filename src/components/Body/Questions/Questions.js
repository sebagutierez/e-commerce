import { useState } from 'react'

const Questions = () => {

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <>
            {/* Contenedor */}
            <div className="flex h-96 mt-16 w-full justify-center items-center">
                {/* Acordeon */}
                <div className="w-full h-96 ">
                    {
                        data.map((e, i) => (
                            <div key={e.key} className="bg-neutral-300 mb-1 px-2.5 py-5">
                                {/* título */}
                                <div className="text-sky-900 flex justify-between items-center cursor-pointer font-ftitles font-extrabold" onClick={() => toggle(i)}>
                                    <div>
                                        {e.question}
                                    </div>
                                    <span>{ selected === i ? '-' : '+'}</span>
                                </div>
                                {/*contenido*/}
                                <div className={selected === i ? "h-auto max-h-80 font-ftext italic pt-4 ease-mostrar" : "max-h-0 overflow-hidden font-ftext italic ease-ocultar"}>
                                    {e.answer}
                                </div>
                            </div>
                        ))}
                
                </div>
            </div>
        </>
    )
}

let data = [
    {
        question: '¿Cuál es el costo del envío?',
        answer: 'El costo de envío tiene un mínimo de $400 y varía de acuerdo a tu ubicación',
        key: 1
    },
    {
        question: '¿Hay un período de prueba para nuestros servicios?',
        answer: 'Si, nuestro período de prueba es de 15 días y dentro de dicho período se puede cancelar sin ningún costo',
        key: 2
    },
    {
        question: '¿Recibimos consultas los días feriados?',
        answer: 'Si, nuestro servicio al cliente funciona los días feriados y fines de semana',
        key: 3
    },
    {
        question: '¿Los libros digitales se pueden descargar?',
        answer: 'No, solo se puede acceder a los libros virtuales a través de la plataforma online',
        key: 4
    }
]

export default Questions