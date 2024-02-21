/* eslint-disable react/no-unescaped-entities */
import { useMemo, useState } from "react";

const WithoutMemoComponent = () => {
  
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [input, setInput] = useState('');

     // Le traitement ci-dessous sera effectué à chaque changement d'état -> dans ce composant, 
     // il sera exécuté au changement de valeur de 'numbers' ET de 'input'
    const sum = numbers.reduce((acc, num) => acc + num, 0)

    console.log("chargement du composant without useMemo")

    const addNumber = () => {
        setNumbers([...numbers, Math.random() * 10])
    }

    return (
        <>
           <h2>Composant sans useMemo()</h2>
           <p>Sum: {sum}</p>
           <button className="btn m-5" onClick={addNumber}>Ajouter un nombre</button>
           <div>
                <input 
                    className="mx-5 input input-bordered"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                {input}
           </div>
        </>
    )
}

const WithMemoComponent = () => {
    
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [input, setInput] = useState('');
    
    const addNumber = () => {
        setNumbers([...numbers, Math.random() * 10])
    }

    // Tout ce qui est dans mon useMemo ne sera exécuté que sur changement d'état de 'numbers'
    const sum = useMemo( () => {
        console.log("Calcul avec useMemo()");
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    return(
        <>
        <h2>Composant avec useMemo()</h2>
        <p>Sum: {sum}</p>
        <button className="btn m-5" onClick={addNumber}>Ajouter un nombre</button>
        <div>
             <input 
                 className="mx-5 input input-bordered"
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
             />
             {input}
        </div>
     </>
    )
}

function UseMemo () {

    return(
        <>
            <h1>Use Memo</h1>
            <WithoutMemoComponent/>
            <WithMemoComponent/>

            <h2>Explication du useMemo()</h2>
            <p>
                On peut remarquer que dans notre exemple, il est nécessaire d'exécuter la fonction de calcul que quand on clique sur le bouton.
                Si on n'utilise pas de useMemo(), celle-ci sera réexécutée également lorsqu'on ajoutera ou supprimera un caractère dans l'input. 
                A l'inverse si on l'utilise on peut spécifier à React de ne relancer la fonction de calcul que lorsque l'on modifie notre 'number'
               <br/>
               Le useMemo() permet à React de connaître les variables et/ou fonctions qui affectent un résultat et de les re-calculer uniquement lorsque cela est nécessaire.
               UseMemo() sert donc à optimiser les performances en évitant des recalculs inutiles.              
            </p>
        </>
    )
}

export default UseMemo