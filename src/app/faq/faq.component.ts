// faq.component.ts

import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  expanded: boolean;
}

interface Category {
  category: string;
  questions: FaqItem[];
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  categories: Category[] = [
    {
      category: 'Tickets',
      questions: [
        { question: 'Question 1', answer: 'Answer 1', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false }
      ]
    },
    {
      category: 'On-Site',
      questions: [
        { question: 'Question 1', answer: 'Answer 1', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
      ]
    },
    {
      category: 'Parking',
      questions: [
        { question: 'Question 1', answer: 'Answer 1', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false }
      ]
    },
    {
      category: 'Participate',
      questions: [
        { question: 'Question 1', answer: 'Answer 1', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false }
      ]
    },
    {
      category: 'Getting there',
      questions: [
        { question: 'Question 1', answer: 'Answer 1', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
        { question: 'Question 2', answer: 'Answer 2', expanded: false }
      ]
    },
  ];

  constructor() { }

  toggleAccordion(faq: FaqItem): void {
    faq.expanded = !faq.expanded;
  }
}
