// pages/posts/[slug].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Post = () => {
  // Your logic to fetch paths
  const paths = [{ params: { slug: 'my-slug' } }];
  
  return {
    paths,
    fallback: false, // or true if you want on-demand generation
  };
};

// export async function getServerSideProps({ params }: any) {
//   const { slug } = params;

//   // Fetch data for the specific post using slug
//   const response = await fetch(`https://api.example.com/posts/${slug}`);
//   const post = await response.json();

//   return {
//     props: { post },
//   };
// }

export default Post;