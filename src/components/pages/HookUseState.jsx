/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

function HookUseState () {
    const [count, setCount] = useState(0);
    let count2 = 0;

    const increment = () => {
        setCount(count + 1);
    };

    const increment2 = () => {
        count2 = count2 + 1
    };

    return (
        <>
            <h1>Le hook UseState</h1>
            <div className="p-5 border w-fit m-auto">
                <p className="pb-5 text-center">{count}</p>
                <button className="btn" onClick={increment}>Incrémenter</button>
            </div>
            <p className="pt-5">En utilisant une variable classique (pas de useState()), la valeur restera toujours la même et sera égale à la valeur au moment du chargement du composant
                Pour modifier la valeur d'une variable et que ce soit mis à jour sur mon navigateur, je dois <strong>utiliser un useState()</strong>
            </p>
            <div className="p-5 border w-fit m-auto">
                <p className="pb-5 text-center">{count2}</p>
                <button className="btn" onClick={increment2}>Incrémenter</button>
            </div>
        </>
    )
}

export default HookUseState