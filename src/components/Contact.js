import { useState, useEffect } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'


const Contact = () => {

    const [showContactBtn, setShowContactBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setShowContactBtn(true);
            } else {
                setShowContactBtn(false);
            }
        });
    }, [])

    return (
        <>
            <div className="fixed z-20  bottom-0 right-0">
                {" "}
                {showContactBtn && (
                    <button className="text-green-500 bg-transparent border-0 transition ease-in-out duration-150 hover:scale-110">
                    <a href='https://web.whatsapp.com/'> <IoLogoWhatsapp className="h-8 w-8 sm:h-11 sm:w-11"/> </a>
                    </button>
                )}{" "}
            </div>
        </>
    )
}

export default Contact