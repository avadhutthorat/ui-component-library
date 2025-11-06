export const dynamic = "force-dynamic";

const MyPosts = async (props: any) => {
  const res = await fetch("https://api.restful-api.dev/objects");
  const lists = await res.json();

  return (
    <>
      <h2>SSR</h2>
      <div>my posts</div>
      {new Date().getSeconds()}
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
