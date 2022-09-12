
import Questions from './Questions'
import question from './question.png'

const QuestionSection = () => {
    return (
    <>
        <div>
            <div className="font-ftitles text-sky-900 text-center text-3xl m-5">
                Preguntas frecuentes
            </div>
            <div className="flex flex-col md:flex-row justify-around place-content-center px-16 md:px-24">
                <div className="self-center md:w-1/2 flex place-content-center">
                        <img
                            src={question}
                            alt="/"/>
                </div>
                <div className="md:w-1/2">
                    <Questions />
                </div>
            </div>
        </div>
    </>
    )
}

export default QuestionSection