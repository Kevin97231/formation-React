/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
function Flux () {

    const data = [
        { nom: 'Produit 1', prix: 20.99, quantite: 5},
        { nom: 'Produit 2', prix: 15.45, quantite: 10},
        { nom: 'Produit 3', prix: 75.32, quantite: 58},
        { nom: 'Produit 4', prix: 30.00, quantite: 25},
        { nom: 'Produit 5', prix: 26.00, quantite: 16},
    ];

    const [checked, setChecked] = useState(true)

    return(
        <>
            <h1>Les flux de données</h1>

            <h2>De parent vers enfant: </h2>
            <p>
                Pour faire passer des données d'un composant parent vers le composant enfant, nous devons utiliser les 'props'

                Exemple: 
            </p>

            <ComposantEnfant/>
            <br/>
            <ComposantEnfant text="Je t'envoie des données, mon enfant !"/>
            <br/>
            <ComposantEnfant dataFromParent={data} />

            <h2>De l'enfant vers son parent</h2>

            <p>
                Sur une appli React, pour faire passer des données de l'enfant vers son parent, nous devons utliser des<strong> évènements et le hook useState()</strong> 
            </p>

            <CheckBoxEnfant checked={checked} onCheck={setChecked}/>

            <br />
            { checked ? 'case cochée' : 'case non cochée'}

        </>
    )
}

function ComposantEnfant ({text = 'Passe moi tes données !', dataFromParent=[]}){
    return(
        <>
            {text}
            <p className="py-5">Voici les objets passés par mon parent: </p>
            { dataFromParent.map((product, index) => 
               <div key={index}>
                    <p>Nom: { product.nom }</p>
                    <p>Prix: { product.prix}</p>
                    <p>Quantité: {product.quantite}</p>
                </div>
            )}
        </>
    )
}

function CheckBoxEnfant ( { checked, onCheck} ) {
    return (
        <>
            <label>
                <input 
                    type="checkbox"
                    onChange = { (e) => onCheck(e.target.checked) }
                    checked = {checked}
                />
            </label>
        </>
    )
}

export default Flux