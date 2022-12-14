import Questions from "./Questions";
import answer from "./answer.png"

const QuestionSection = () => {
  return (
    <>
      <div className="mb-24 sm:m-14 mt-16">
        <div className=" text-sky-900 text-left ml-14 text-3xl font-bold ">
          Preguntas frecuentes
        </div>
        <div className="flex flex-col md:flex-row justify-around place-content-center px-2.5 md:px-24">
          <div className="self-center md:w-1/2 flex place-content-center">
            <img src={answer} alt="/" />
          </div>
          <div className="md:w-1/2">
            <Questions />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionSection;
