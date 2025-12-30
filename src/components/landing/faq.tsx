import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What is Pilot Testers?",
      answer: "Pilot Testers is a community-driven platform that connects Android developers with real users to meet Google Play's 14-day closed testing requirement. Developers get valuable feedback, and testers earn credits to get their own apps tested.",
    },
    {
      question: "How does the 'test-to-earn' model work?",
      answer: "When you test an app for another developer, you earn credits. You can then use these credits to submit your own app for testing. It's a reciprocal system designed to benefit the entire community.",
    },
    {
        question: "How many testers do I need for Google Play's closed testing?",
        answer: "Google requires you to have at least 20 testers opt-in to your closed test. They must also remain in the test for at least 14 consecutive days. Our platform helps you meet these requirements effortlessly.",
    },
    {
      question: "Is this service free?",
      answer: "The core platform operates on a free, credit-based system. You can earn all the credits you need by testing other apps. We also offer premium plans for developers who need guaranteed testers or want to skip the testing process.",
    },
    {
        question: "What kind of feedback will I receive?",
        answer: "You will receive structured feedback on bugs, usability, and overall experience from real users testing on a variety of devices. This helps you identify and fix issues before your official launch.",
    },
    {
        question: "How do you ensure the quality of testers?",
        answer: "Our community is made up of fellow developers and tech enthusiasts who understand the app development lifecycle. The reciprocal nature of the platform encourages thoughtful and constructive feedback."
    }
  ]
  
  export function Faq() {
    return (
      <section id="faq" className="py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
                <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Have questions? We've got answers. Here are some of the most common questions we get.
                </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  