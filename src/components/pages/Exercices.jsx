/* eslint-disable react/prop-types */
function Exercices () {

    const products = [
        { category: 'Fruits', price: '$1', number: 0, name: 'Banana' },
        { category: 'Fruits', price: '$1', number: 2, name: 'Mango' },
        { category: 'Fruits', price: '$2', number: 0, name: 'Pineapple' },
        { category: 'Vegetables', price: '$2', number: 4, name: 'Broccoli' },
        { category: 'Vegetables', price: '$4', number: 0, name: 'Carrot' },
        { category: 'Vegetables', price: '$1', number: 6, name: 'Zucchini' }
    ];

    const fruits = products.filter( product => product.category === 'Fruits')
    const legumes = products.filter( product => product.category === 'Vegetables')
    
    return(
        <>
            <h1>Exercices</h1>

            Nous avons une liste de produits: 
            <pre>
                {/* number correspond à la quantité */}
                {`
                    const products = [
                        { category: 'Fruits', price: '$1', number: 0, name: 'Banana' },
                        { category: 'Fruits', price: '$1', number: 2, name: 'Mango' },
                        { category: 'Fruits', price: '$2', number: 0, name: 'Pineapple' },
                        { category: 'Vegetables', price: '$2', number: 4, name: 'Broccoli' },
                        { category: 'Vegetables', price: '$4', number: 0, name: 'Carrot' },
                        { category: 'Vegetables', price: '$1', number: 6, name: 'Zucchini' }
                    ];
                `}
            </pre>
            <pre>
                {`
                    1)  Créer un composant parent et deux composants enfants

                        Les deux composants enfant afficheront un tableau contenant les colonnes 'nom', 'prix' et 'quantité'. Le premier enfant affichera UNIQUEMENT les fruits,
                        le second uniquement les légumes

                        (Utiliser la fonction filter() pour trier)

                    2)  Ajouter une case à cocher permettant de masquer / afficher les produits qui ne sont pas en stock (s'aider de l'attribut 'number' représentant la quantité)

                    3)  Ajouter une barre de recherche permettant de faire une recherche sur le 'name' sur l'ensemble du tableau
                `}
            </pre>


            <h2>Correction</h2>        

            <div className="border-b mb-5">
                <h2>Exemple 1</h2>
                <Fruit products={products}/>
                <Legume products={products}/>
            </div>
           <div className="border-b mb-5">
                <h2>Exemple 2</h2>
                <LegumeListe products={products}/>
           </div>

            <div>
                <h2>Exemple 3</h2>
                <FruitsEtLegumes products={fruits}/>
                <FruitsEtLegumes products={legumes}/>
            </div>
            
        </>
    )
}

function Fruit ({products}) {
    return(
        <>
            <h2>Tableau des fruits: </h2>

            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                    </tr>
                </thead>
                <tbody>
                    { products
                        .filter( (product) => 
                            product.category === 'Fruits'
                        ) 
                        .map((product, item) => 
                            <tr key={item}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.number}</td>
                            </tr>
                        )
                        }
                </tbody>
            </table>
        </>
    )
}

function Legume ({products}) {
    return(
        <>
            <h2>Tableau des légumes: </h2>

            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                    </tr>
                </thead>
                <tbody>
                    { products
                        .filter( (product) => 
                            product.category === 'Vegetables'
                        ) 
                        .map((product, item) => 
                            <tr key={item}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.number}</td>
                            </tr>
                        )
                        }
                </tbody>
            </table>
        </>
    )
}


function LegumeListe ({products}) {
    return (
      <>
        <h2>Tableau des légumes: </h2>

        {products
          .filter((product) => product.category === "Vegetables")
          .map((product, item) => (
            <ul key={item} className="border-b mb-5">
              <li>produit: {product.name}</li>
              <li>prix: {product.price}</li>
              <li>quantité: {product.number}</li>
            </ul>
          ))}
      </>
    );
}

// // Renverra la fonction 
function FruitsEtLegumes ({products}) {
    return (
        <>
             <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, item) => 
                        <tr key={item}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.number}</td>
                        </tr>
                        )
                        }
                </tbody>
            </table>
        </>
    )
}

export default Exercices