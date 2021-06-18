import Nav from './components/nav';

const Layout = ({ children }) => (
  <>
    <Nav />

    {children}
  </>
);

export default Layout;
