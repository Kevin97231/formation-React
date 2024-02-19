function NavBar() {

    return (
      <>
        <div className="navbar bg-base-100 border-b mb-5">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl" href="/">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/syntax-jsx">Syntax Jsx</a>
              </li>
              <li>
                <a href="/theorie">Théorie</a>
              </li>
              <li>
                <a href="/hook-use-state">Le hook useState</a>
              </li>
              <li>
                <a href="/exercices">Exercices</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default NavBar