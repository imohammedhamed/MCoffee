import React from 'react';
import { newsLetterCardContent } from '@/lib/data';
import NewsLetterContent from './newsLetter-content';
import SectionHeading from './section-heading';

export default function NewsLetterSection() {
  return (
    <section id='newsletter' className="md:container md:mx-auto lg:container lg:mx-auto">
      <SectionHeading>NewsLetter</SectionHeading>
      <div className="w-full flex sm:overflow-x-auto sm:gap-2 sm:px-4 lg:px-0 md:px-0 md:flex-col lg:flex-col">
        {newsLetterCardContent.map((content) => (
          <NewsLetterContent
            key={content.id}
            title={content.title}
            subTitle={content.subTitle}
            bodyContent={content.bodyContent}
            buttonContent={content.buttonContent}
            imgSrc={content.imgSrc}
            isReverse={content.isReverse}
          />
        ))}
      </div>
    </section>
  );
}
