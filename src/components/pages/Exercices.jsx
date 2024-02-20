function Exercices () {

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
        </>
    )
}

export default Exercices