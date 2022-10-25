export default function Modal({show, setShow,data,addToCart}) {
    const accion=()=>{
      addToCart({data})
      setShow(false)
    }
  return (
    <>
      {show && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-sm mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-2xl font-ftext font-semibold">
                    Agregando al carrito...
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShow(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg font-ftext leading-relaxed text-slate-500">
                    Estás seguro/a de querer agregar este producto a su carrito ?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-t border-solid rounded-b border-slate-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 border border-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent hover:scale-110 hover:text-red-500 focus:outline-none"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-emerald-500 border border-emerald-500 uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-white active:bg-emerald-600 hover:shadow-lg hover:scale-110 hover:text-emerald-500 focus:outline-none"
                    type="button"
                    onClick={() => accion()}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) }
    </>
  );
}
