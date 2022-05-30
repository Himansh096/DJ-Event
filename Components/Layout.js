import Head from 'next/head'
import style from "../styles/Layout.module.css"
import Header from './Header'
import Footer from './Footer'
export default function Layout({ title, keyword, description, children }) {
    return (
        <div >
            <Head>
                <title>{title}</title>
                <meta name="keyword" content={keyword}></meta>
                <meta name="description" content={description}></meta>
            </Head>
            <Header />
            <div className={style.container}>
                {children}
            </div>
            <Footer />
        </div >
    )
}

Layout.defaultProps = {
    title: 'New Next App',
    description: 'find the best next apps',
    keywords: 'next js app, app',
}