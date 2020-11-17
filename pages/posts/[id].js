import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

//パスを取得
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false　//取得したパス以外のパスにアクセスされた時に404を返す
  }
}

//取得したパスごとのコンテンツを取得している
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}