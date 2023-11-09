'use client'
import { ReactNode } from "react";
import Image from 'next/image'
import Styles from './Styles/Article.module.scss'


const Article = (): ReactNode=>{
    return (
        <div className={Styles.MainDiv}>
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
