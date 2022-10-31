import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
      <section>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    );
  }

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }