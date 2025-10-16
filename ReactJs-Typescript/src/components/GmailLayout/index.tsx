import "./style.css";

const GmailLayout = () => {
  return (
    <div className="gmail-container">
      <header>
        <div>GMAIL</div>
        <div>
          <input type="text" name="search" className="search"></input>
        </div>
        <div>
          <span>Support</span>
          <span>Settings</span>
          <span>Gemini</span>
          <span>Apps</span>
          <span>Avatar</span>
        </div>
      </header>
      <main>
        <aside> Left side nav</aside>
        <section>mail clist</section>
      </main>
    </div>
  );
};

export default GmailLayout;
