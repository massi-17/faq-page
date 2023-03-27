import React from "react"
import arrow from '../images/arrow.png'
import { useState } from "react";

export default function Faq({faqQuestion, faqAnswer}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="faq">
            <div className='question' onClick={() => setIsOpen(prevState => !prevState)}>
            <p style={isOpen ? {fontWeight: 700} : {fontWeight: 400}}>{faqQuestion}</p>
                <span className='arrow'>
                    <img src={arrow} alt="" className={isOpen ? 'arrowUp' : 'arrow'}  />
                </span>
            </div>
            
            <div className={isOpen ? 'answer' : 'answer displaynone'}>
                {faqAnswer}
            </div>

            <hr></hr>
        </div>
        

    )
}