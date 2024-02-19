/* eslint-disable react/no-unescaped-entities */
function Theorie(){

    return(
        <>
            <h1>Théorie</h1>

            <h2> 1. Historique</h2>
            <p>
                Avant l'arrivée des frameworks JS, les sites dynamiques étaient uniquement en HTML / CSS + js
            </p>
            <ul>
                <li>
                    html: Permet d'afficher la sémantique      
                </li>
                <li>
                    CSS: permet de mettre en forme
                </li>
            </ul>
            Puis est arrivé le JS pour ajouter de l'intéractivité

            Ensuite est arrivé la naissance des application SPA ('Single page application')

            En 2010: est né angular. Très performante mais complexe

            En 2013 est née ReactJs, lancé par Facebook

            <h2>2. DOM (document object model)</h2>
            <p>
                C'est une API qui va représenter et intéragir avec tout type de document HTML. Ca va être une représentation du document sous forme d'arbre nodal.
            <br/>
            Le DOM est l'une des API les plus utilisées sur le Web parce qu'elle autorise du code exécuté dans un navigateur à accéder et interagir avec chaque nœud            
            dans le document. Les nœuds peuvent être créés, déplacés et modifiés. Des écouteurs d'évènements (« event listeners ») peuvent être ajoutés à des nœuds et
            déclenchés par un évènement donné.
            </p>
            <div>
                <img src="/src/assets/Dom.PNG" className="m-auto"/>
            </div>

            <h2>React: utilisation d'un DOM virtuel</h2>

            Le dom virtuel (VDOM) est un concept de programmation dans lequel une représentation d'une interface utilisateur (UI) est conservée en mémoire.
            <strong>React JS crée son propre DOM virtuel</strong> où sont rattachés vos composants. Cette approche vous donne énormément de flexibilité et des performances 
            execptionnelles, car React JS est capable de calculer quel changement dans le DOM a besoin d'être fait et change juste <strong>LA PARTIE</strong> qui a besoin d'être
            mise à jour. De cette façon, React JS évite des opérations coûteuse dans le DOM


            <h2>3. Les Hooks</h2>

            <p>
            La version 16.8 de React (ou ReactJs) a introduit une nouveauté : les hooks. Les hooks sont une nouvelle façon d'offrir des composants en React et permettent l’utilisation 
            de “function” avec la même finalité que les “class” utilisées jusque là. Un hook est une fonction qui permet d’utiliser le cycle de vie ou encore des états dans les composants 
            sous forme de “function”. Un hook, par convention, commence par le mot clé “use” en minuscule,
            </p>
            <ul>
                <li>
                    <strong>Le hook useState()</strong>: Permet l'utilisation de variables de "state" dans un composant react.
                    Il prend en paramètres une valeur initiale (ou une fonction qui renvoie une valeur initiale) et retourne deux valeurs: la valeur courante 'state', une fonction pour 
                    la mise à jour
                </li>
            </ul>
        </>
    )
}

export default Theorie