import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Do you offer emergency plumbing services?',
      answer: 'Yes, we offer 24/7 emergency plumbing services. Our team is available around the clock to handle urgent plumbing issues such as burst pipes, severe leaks, and blocked drains.'
    },
    {
      question: 'Are your plumbers licensed and insured?',
      answer: 'Absolutely! All our plumbers are fully licensed, certified, and insured. We maintain the highest standards of professionalism and ensure all our technicians are up-to-date with the latest training and certifications.'
    },
    {
      question: 'What are your service rates?',
      answer: 'Our service rates vary depending on the type of work required. We offer competitive pricing and provide free estimates for all projects. Contact us for a detailed quote based on your specific needs.'
    },
    {
      question: 'Do you provide warranties on your work?',
      answer: 'Yes, we stand behind all our work with comprehensive warranties. The warranty period depends on the type of service provided, and we\'ll discuss this with you before starting any work.'
    },
    {
      question: 'How quickly can you respond to service calls?',
      answer: 'For emergency calls, we typically respond within 1-2 hours. For scheduled appointments, we offer same-day and next-day service options depending on availability.'
    },
    {
      question: 'Do you work on both residential and commercial properties?',
      answer: 'Yes, we provide plumbing services for both residential and commercial properties. Our team has experience handling everything from small home repairs to large-scale commercial installations.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions</p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{faq.question}</span>
                      {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {openIndex === index && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

