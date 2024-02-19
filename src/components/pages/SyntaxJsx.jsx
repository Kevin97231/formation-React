/* eslint-disable react/prop-types */
function SyntaxJsx() {
  let name = "Toto";
  let style = { color: "red", backgroundColor: "blue" };
  let styleEnfant = { color: "white", backgroundColor: "black" };
  let bool = true;

  const fruits = ["banane", "abricot", "pomme"];

  const handleClick = () => {
    alert("j'ai cliqué sur le bouton");
  };

  return (
    <>
      <h1 className="title">Bonjour tout le monde</h1>

      <p>Bonjour {name}</p>

      <p style={{ color: "red", backgroundColor: "blue" }}>
        Je suis du texte mis en style dans le JSX
      </p>

      <p style={style}>
        Je suis du texte mis en style dans le JSX grâce à une variable
      </p>

      <h1>Les évènements</h1>

      <button onClick={handleClick}>Cliquer sur le bouton</button>
      <button onClick={() => alert("J'ai cliqué sur le deuxième bouton ")}>
        Cliquer sur le bouton
      </button>

      {bool ? <p>Texte caché</p> : <></>}

      <ul>
        {/* En react, dans le return d'un composant, on doit utiliser un .map() pour afficher les données d'un tableau. Si on utilise un .forEach() ou un for classique,
                rien ne s'affichera sur la page web.
                Le .map() sert à transformer chaque élément du tableau en un élément JSX
                */}
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}

        {/* { fruits.forEach( fruit =>  <li key={fruit}>{fruit}</li>)} */}
      </ul>
      <Enfant/>
      <Enfant name='Kévin' style={styleEnfant}/>
    </>
  );
}

function Enfant ({name = 'Toto', style}) {
  return (
  <>
    <h2 style = {style}>Je suis le composant enfant</h2>
    <p>Bonjour {name}</p>
  </>
  )
}



export default SyntaxJsx;
