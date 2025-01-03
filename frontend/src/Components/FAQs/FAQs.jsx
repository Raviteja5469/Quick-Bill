import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import './FAQs.css'

const faqData = [
    {
      question: 'What is Quick-Bill?',
      answer: 'Quick-Bill is a streamlined billing solution...',
    },
    {
      question: 'How do I get started?',
      answer: 'To get started with Quick-Bill, simply sign up...',
    },
    {
      question: 'What payment methods are supported?',
      answer: 'Quick-Bill supports various payment methods...',
    },
    // ... more questions
  ];

const FAQs = () => {

  const [openAnswers, setOpenAnswers] = useState({})

  const toggleAnswer = (index) => {
    setOpenAnswers((prevOpenAnswers) => ({
      ...prevOpenAnswers,
      [index]: !prevOpenAnswers[index],
    }));
  };


  return (
    <div className='faqs'>
      <p className='faq-heading'>Frequently Asked Questions</p>
      <div className="faq-cont">
      {faqData.map((faq, index) => (
          <div key={index} className="faq-item"> {/* Add a key prop */}
            <button className="question-box" onClick={() => toggleAnswer(index)}>
              <p>{faq.question}</p>
    
                <FontAwesomeIcon icon={openAnswers[index] ? faMinus : faPlus} />
      
            </button>
            {openAnswers[index] && (
              <div className='answer-box'>
              {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQs
