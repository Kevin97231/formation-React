import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
function Formulaire() {

    const [name, setName] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {

        // Lorsqu'un formulaire est soumis; React va recharger la page (et donc l'évènement à 0)
        // En appelant 'e.preventDefault()', vous annulez ce comportement par défaut
        e.preventDefault()
        console.log(new FormData(e.target))
    }

    return(
        <>
            <h1>Les formulaires</h1>

            <h2>Les champs contrôlés</h2>
            <p> En react, nous avons un concept que nous pouvons appeler les champs contrôlés.
                En utilisant le <strong>OnChange()</strong> d'une input et le hook useState(). Ainsi,
                nous pouvons mettre à jour une variable lié à l'input à chaque changment (donc à chasque fois 
                qu'un caractère est ajouté ou supprimé).
            </p>
            <div className="p-5 mt-5 border mb-10 w-fit">
            <p>
            Bonjour, { name !== "" ? name: "entrez votre nom" }
            </p>
                <input
                    type = 'text'
                    value = {name}
                    onChange={handleNameChange}
                    className="mb-5 ml-5 input input-bordered"
                />               
            </div>
            
            <h2>Les formulaires 'classique'</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type = 'text'
                    name = 'login'
                    defaultValue='login'
                    className="mb-5 ml-5 input input-bordered"
                />
                <input
                    type = 'text'
                    name = 'password'
                    defaultValue='password'
                />
                <button className="ml-2 btn">Envoyer</button>
            </form>  
        </>
    )
}

export default Formulaire;