import React from 'react'
import {newsLetterCardContent} from '@/lib/data'
import NewsLetterContent from './newsLetter-content'
import SectionHeading from './section-heading'
export default function NewsLetterSection() {
    return (
            <div className=" container mx-auto">
            <SectionHeading> NewsLetter </SectionHeading>
            {newsLetterCardContent.map(content => {
                return(
                    <NewsLetterContent
                    key = {content.id}
                    title={content.title}
                    subTitle={content.subTitle}
                    bodyContent={content.bodyContent}
                    buttonContent={content.buttonContent}
                    imgSrc={content.SummerimgSrc}
                    isReverse = {content.isReverse}
                    />
                )
            })}
            </div>
    )
}