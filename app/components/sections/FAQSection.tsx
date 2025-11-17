'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'How does Rimigo help me plan my trip?',
      answer: 'Rimigo uses AI to understand your preferences and creates personalized itineraries tailored to your travel style. From flights to activities, we curate options that match what you love, saving you hours of research.',
    },
    {
      id: 'item-2',
      question: 'Can I book everything through Rimigo?',
      answer: 'Yes! Rimigo is your one-stop platform for booking flights, hotels, activities, and experiences. No need to juggle multiple websites - everything you need is in one place with competitive pricing.',
    },
    {
      id: 'item-3',
      question: 'What if I need help during my trip?',
      answer: 'We provide 24/7 support throughout your journey. Whether you need to make changes, have questions, or face unexpected situations, our travel experts are just a message away to help you out.',
    },
    {
      id: 'item-4',
      question: 'How does Rimigo save me money?',
      answer: 'Our AI scans thousands of options to find the best deals and hidden gems. We also provide insider tips and money-saving recommendations that you might miss on your own, helping you get more value from your travel budget.',
    },
    {
      id: 'item-5',
      question: 'Is my travel information secure with Rimigo?',
      answer: 'Absolutely. We use bank-level encryption to protect your personal and payment information. Your data privacy and security are our top priorities, and we never share your information with third parties without your consent.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-purple-50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold text-center mb-12">
          Still have <span className="text-purple-600">questions</span>?
        </h2>
        <Accordion
          type="single"
          collapsible
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="cursor-pointer text-base md:text-lg font-medium hover:no-underline text-gray-900 text-left hover:text-purple-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <BlurredStagger text={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text = "built by ruixen.com",
}: {
  text: string;
}) => {
  const headingText = text;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div className="w-full">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="text-base leading-relaxed break-words whitespace-normal text-gray-600"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
