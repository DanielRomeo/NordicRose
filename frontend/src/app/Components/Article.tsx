'use client'
import { ReactNode } from "react";
import Image from 'next/image'


const Article = (): ReactNode=>{
    return (
        <div>
            <Image
                src="/rectangle.png"
                width={300}
                height={200}
                alt="Picture of the author"
            />
            <p>Here are some things you should know regarding how we work </p>
        </div>
    )
}

export default Article;
