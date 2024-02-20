import { useEffect, useState } from "react"

/* eslint-disable react/no-unescaped-entities */
function HookUseEffect (){

    const [count, setCount] = useState(0)

    useEffect( () => {
        console.log('Effet secondaire déclenché');
        document.title = `Count: ${count}`
    },[count])

    return (
        <>
            <h1>Le hook useEffect()</h1>
                <ul>
                    <li>
                        Utilisé pour gérer des effets secondaires dans un composant.
                    </li>
                    <li>
                        Permet d'effectuer des opérations après le rendu du composant (<strong>comme des appels API</strong>, la manipulation du DOM, la gestion d'abonnements etc .. )
                    </li>
                </ul>
                <strong>useEffect() est très souvent utilisé en conjonction avec un useState() pour gérer des effets secondaires en réponse à des changements d'état</strong>

            <h2>Exemple: </h2>
            <div>
                <p className="pt-2 font-semibold">
                    Regardez le titre du document ('nom' de l'onglet) !
                </p>
                <div className="flex">
                    <p className="pt-3 pr-2">Count = {count}</p>
                    <button className="btn" onClick={() => setCount(count + 1)}> Increment </button>
                </div>
            </div>
        </>
    )
}

export default HookUseEffect