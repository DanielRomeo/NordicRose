'use client'
import { PropsWithChildren, ReactNode } from "react";
import Image from 'next/image'
import Styles from './Styles/Article.module.scss'


type myPropsType ={
    blogTitle: string,
    blogImage: string
}


const Article = ({children, blogTitle, blogImage}: PropsWithChildren<myPropsType>): ReactNode => {
    return (
        <div className={Styles.MainDiv}>
            <Image
                src={`/http://localhost:8000${blogImage}`}
                width={300}
                height={200}
                alt="Picture of the author"
            />
            <p>{blogTitle}</p>
        </div>
    )
}

export default Article;
