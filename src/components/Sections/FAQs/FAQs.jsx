import { useMemo } from "react";

function FAQs() {
  const data = useMemo(
    () => [
      {
        question: "Why choose our medical for your family?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        question: "Why we are different from others?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        question: "Trusted & experience senior care & love",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        question: "How to get appointment for emergency cases?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
    ],
    []
  );
}

export default FAQs;
