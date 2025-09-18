import "./style.css";

const HomeLayout = () => {
  return (
    <div className="container">
      <header>Siya's Burger</header>
      <nav>
        <ul className="nav_items_container">
          <li className="nav_items_container-item">Home</li>
          <li className="nav_items_container-item">Products</li>
          <li className="nav_items_container-item">Contact Us</li>
        </ul>
      </nav>
      <section>section</section>
      <footer>Footer</footer>
    </div>
  );
};

export default HomeLayout;
