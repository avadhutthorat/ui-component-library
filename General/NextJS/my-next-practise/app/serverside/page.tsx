// // export const getServerSideProps = async () => {
// //   return { props: data };
// // };

const MyPosts = async (props: any) => {
  const res = await fetch("https://api.restful-api.dev/objects");
  const lists = await res.json();

  return (
    <>
      <div>my posts</div>
      <div>
        <ul>
          {lists.map((product: any) => {
            return (
              <li key={product.id} className="text-amber-500">
                {product.name} = {product?.data?.capacity || "Empty"}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MyPosts;
