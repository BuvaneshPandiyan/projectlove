import React, { useState } from 'react';
import './FrequentlyAskedQuestions.css';

function FrequentlyAskedQuestions() {
  // Sample questions and answers. You can replace these with your own.
  const faqData = [
    {
      question: "Yenda Ipdilam panitu iruka?",
      answer: "Yenaku pudichu iruku na panran onaku yenna vandhuchu onaku dha yenna pudikalanu solitala aprom yen yenna kekra. Na 2024 mudiyura varikum ipdi dha irupan aprom venam yen mindset epdi irukunu pathutu change aguran."
    },         
    {
      question: "Idhalam pani yen kita irundhu yenna dhanda ni expect panra?",
      answer: "Na onkita onu expect pannala. Yenaku on mela inum feelings iruku adha katradhu yepdinu therla adhan ipdi panitu irukan. Ni yenakaga onu panna venam podhuma."
    },
    {
      question: "Loosu mari yedho countdown oda vitrukiya adhu mudincha aprom yenna vitruvala?",
      answer: "Ama andha countdown mudhicha aprom onna disturb panna matan. Yenaku un mela irundha feelings la poga vaika dhan indha ten days countdown 2025 la na oru pudhu ala irupan."
    },
    {
      question: "Ipdila panna apromum na onna pudikala nu sonna yenna panuva?",
      answer: "Onu panna matan na la costlyna diamond mari yenna vechika oru status venum onaku andha status illanu ni mudivu panitu ponadhuku na yenna panna mudiyum your loss."
    },
    {
      question: "Na onna vena soltu pona aprom unaku yaruma love pannala na yenna panuva?",
      answer: "Cheapana product dhan yellaru kitayum irukum na la costly ana product only certain people can afford me yenna yarum choose panna venam na dhan choose panra yedathula irupan 2025 aprom."
    },
    {
      question: "Idhalam padichitu thookam dhanda varudhu loosu mari pannama poi thungu",
      answer: "Ni padicha padi padikati po na vandhu efforts podama dha ni vitu poitanu feel panna kudadhu future la adha idhla panra na loosu dhan onaku yenna on velaiya matum paru",
    },
    {
        question: "Ona yaru indha marilam efforts poda soldradhu",
        answer: "Yen virupam yenkita yarum podu podadha nu sollavenam sigma males avangaluku thondradha senjitu povanga na yenaku thonradhu seiran nanu sigma male dha ma."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the FAQ answer visibility
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
