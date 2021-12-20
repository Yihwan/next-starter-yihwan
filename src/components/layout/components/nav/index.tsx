import Link from 'next/link';

const Nav = () => (
  <nav style={{ backgroundColor: 'ivory' }}>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/todos/">Todos</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
