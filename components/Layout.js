import Header from "./header";

export default ({ children }) => (
  <div>
    <header>
      <Header />
    </header>
    {children}
    {/* <footer>footer</footer> */}
  </div>
);
