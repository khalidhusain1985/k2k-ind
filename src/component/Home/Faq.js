import React, { useState } from 'react';
import arrow from '../../assets/arrow.png';
import faq from '../../assets/faq.png';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggles the FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does your IT company offer?",
      answer: "We offer a comprehensive range of customized IT services including:",
      point: "Managed IT Services: We provide complete support and maintenance of your IT infrastructure.",
      point2: "Cybersecurity Solutions: Our experts give protection against data breaches, malware, and other cyber threats.",
      point3: "Cloud Computing: Our agile team secures cloud storage, migration, and management.",
      point4: "Network Management: We design, implement, and monitor robust network solutions.",
      point5: "IT Consulting: We provide tailored expert advice on technology strategy, implementation, and scaling.",
      point6: "Software Development: We custom software and mobile app development tailored to your business needs."
    },
    {
      question: "How do you ensure data security?",
      answer: "We follow industry best practices and standards for data security, such as:",
      point: "We implement multi-layered security protocols (firewalls, encryption, multi-factor authentication).",
      point2: "We perform security audits and vulnerability assessments regularly.",
      point3: "We train your staff on cybersecurity awareness to prevent internal threats."
    },
    {
      question: "How do your Managed IT Services work?",
      answer: "Our Managed IT Services provide ongoing monitoring, maintenance, and support of your IT infrastructure. It includes:",
      point: "24/7 monitoring of systems to prevent issues before they arise.",
      point2: "Regular software updates, backups, and security patches.",
      point3: "Troubleshooting and on-demand technical support.",
      point4: "Scalable solutions."
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "We provide:",
      point: "24/7 helpdesk support via phone, email, and chat.",
      point2: "Onsite and remote troubleshooting for more complex issues.",
      point3: "Dedicated account managers for personalized assistance."
    },
    {
      question: "How do you handle IT emergencies?",
      answer: "Our emergency response team can:",
      point: "Address critical issues immediately while minimizing downtime.",
      point2: "Provide disaster recovery services, including data backup and restoration in the event of a system failure or breach."
    },
    {
      question: "Do you offer scalable solutions for growing businesses?",
      answer: "Yes, our IT solutions are designed to grow with your business. As per your needs, we can upgrade your systems and infrastructure and implement additional security measures."
    },
    {
      question: "How do your pricing plans work?",
      answer: "We offer flexible plans to accommodate businesses of all sizes. Our pricing models can be tailored to your specific needs. We offer both fixed-rate and subscription-based plans.",
      point: "Fixed monthly fees for Managed IT Services.",
      point2: "Pay-as-you-go pricing for one-time services or project-based work.",
      point3: "Customized packages based on your specific business requirements."
    },
    {
      question: "What is your typical onboarding timeline?",
      answer: "The onboarding process usually takes between 2 to 4 weeks, depending on the complexity of your IT infrastructure."
    },
    {
      question: "What makes your IT company different?",
      answer: "We stand out because of our:",
      point: "Proactive Support: We prevent issues before they impact your business.",
      point2: "Tailored Solutions: We customize our services based on your business goals and industry.",
      point3: "24/7 Availability: Round-the-clock support to ensure smooth operations.",
      point4: "Expert Team: Certified professionals with years of experience in IT and cybersecurity.",
      point5: "Client-Centric Approach: We prioritize customer satisfaction and work as an extension of your team."
    },
    {
      question: "What is the size of your average client?",
      answer: "We have a strong foothold on clients ranging from small businesses to large corporations in varied industries."
    },
    {
      question: "Can you provide references from other clients?",
      answer: "Absolutely, we can provide references upon request to give you an idea of our service quality and client satisfaction."
    }
  ];

  return (
    <div className='lg:mx-4 py-10 flex flex-col lg:flex-row' data-aos="fade-up">
      <div className='px-10 py-10 text-black lg:w-1/2'>
        <h3 className='py-5 font-bold'>Frequently Asked Questions</h3>
        <h2 className='font-extrabold py-5 text-[40px] leading-snug'>Have any Question <br /> to our team?</h2>
        <button className="text-black py-3 text-[18px] w-60 h-12 rounded-xl flex gap-2 items-center">
          <h3>Ask Questions here</h3>
          <img src={arrow} className="h-6" alt="arrow" />
        </button>
        <img src={faq} className='py-10' alt="FAQ Illustration" />
      </div>

      <div className="w-full lg:w-1/2 mx-auto py-20 px-5">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span className="text-2xl font-bold">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <div className="mt-3 text-gray-600">
                  {item.answer}
                  <br />
                  <ul className="list-disc pl-5">
                    {item.point && <li>{item.point}</li>}
                    {item.point2 && <li>{item.point2}</li>}
                    {item.point3 && <li>{item.point3}</li>}
                    {item.point4 && <li>{item.point4}</li>}
                    {item.point5 && <li>{item.point5}</li>}
                    {item.point6 && <li>{item.point6}</li>}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
