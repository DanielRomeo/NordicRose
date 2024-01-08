'use client'
import { PropsWithChildren, ReactNode } from "react";
import Image from 'next/image'
import Styles from './Styles/Article.module.scss'


type myPropsType ={
    blogTitle: string,
    blogImage: string
}


const Article = ({children, blogTitle, blogImage}: PropsWithChildren<myPropsType>): ReactNode => {

    const url = `http://localhost:8000/${blogImage}`
    return (
        <div className={Styles.MainDiv}>
            <Image
                src={url}
                width={300}
                height={200}
                alt="Picture of the author"
            />
            <p>{blogTitle}</p>
        </div>
    )
}

export default Article;
