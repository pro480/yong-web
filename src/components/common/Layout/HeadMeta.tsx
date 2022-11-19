import Head from "next/head"
import logo from "public/images/logo/logo(H)_symbol_text_tag(EN)_w.svg"

interface Props{
    title:string,
    description:string
}

const HeadMeta = ({title, description}:Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content = {description}
            />

            {/* opengraph 타이틀, 설명, 이미지 */}
            <meta property='og:title' content={title}/>
            <meta property='og:description' content={description}/>
            <meta property='og:image' content={logo}/>

            {/* 검색 키워드 */}
            <meta
                name="keywords"
                content = "eba, 빅데이터 연구, bigdata research, 빅데이터, bigdata, big data, education big data, 교육 빅데이터"
            />
            {/* 인코딩 */}
            <meta charSet="URF-8"/>

            {/* 모바일 반응형 */}
            <meta
                name="viewport"
                content="user-scalable=no, width=device-width"
            />
        </Head>
    )
}

export default HeadMeta;