const StartButton = () => {
  const start = () => {
      window.scrollTo(0, 450);
  };
  return (
    <div>
      <button
        className="transform bg-transparent text-black border border-orange-600 font-ftitle md:hover:font-bold md:text-base hover:text-black hover:font-black h-10 w-28 hover:h-12 hover:w-32 md:w-32 rounded-md  m-4 hover:transition-all hover:scale-125 self-center"
        onClick={start}
      >
        <div>Empezar</div>
      </button>
    </div>
  );
};

export default StartButton;
