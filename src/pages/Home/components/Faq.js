import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
      {
        id: 1,
        question: "Why should I use CodeBook?",
        answer: "CodeBook helps you learn programming through structured, project-based courses that focus on real-world skills. Instead of theory-heavy content, you get practical examples and hands-on learning that prepares you for real development work."
      },
      {
        id: 2,
        question: "Can I access my eBook on mobile?",
        answer: "Yes, all your purchased eBooks and learning materials are fully accessible on mobile, tablet, and desktop. You can continue learning anytime, anywhere, with a seamless experience across all devices."
      },
      {
        id: 3,
        question: "Do you offer refunds?",
        answer: "Yes, we offer refunds within a limited period if you're not satisfied with your purchase. Our goal is to ensure you have a valuable learning experience, so you can request a refund if the course does not meet your expectations."
      },
      {
        id: 4,
        question: "Do you support international payments?",
        answer: "Yes, CodeBook supports international payments through secure payment gateways. Users from different countries can easily purchase courses using major debit and credit cards."
      }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}
