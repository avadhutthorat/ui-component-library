export default function BlogPage({
  posts = [],
}: {
  posts: { id: number; title: string }[];
}) {
  return (
    <div>
      <h2>SSG</h2>
      <h1>Blog Posts</h1>
      {new Date().getSeconds()}
      <ul>
        {posts?.map((p) => (
          <li key={p?.id}>{p?.title}</li>
        ))}
      </ul>
    </div>
  );
}

// This runs at build time
// export async function getStaticProps() {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=5"
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts, // passed to BlogPage as props
//     },
//   };
// }
