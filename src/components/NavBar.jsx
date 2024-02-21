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
              <li>
                <a href="/formulaire">Formulaire</a>
              </li>
              <li>
                <a href="/flux">Les flux</a>
              </li>
              <li>
                <a href="/use-effect">hook useEffect</a>
              </li>
              <li>
                <a href="/use-memo">hook useMemo</a>
              </li>
              <li>
                <a href="/requete-api">Requête API</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default NavBar