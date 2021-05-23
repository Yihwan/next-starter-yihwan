import Nav from './components/nav';

const Layout = ({ children }) => (
  <>
    <Nav />

    {children}

    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
);

export default Layout;
