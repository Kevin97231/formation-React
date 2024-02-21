import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
function RequetesApi () {

    // _________________________REQUETE GET /  ____________________________________
    const url = 'http://localhost:3001/products'

    // ATTENTION ! NE PAS REPRODUIRE
    // Version 1
    // const [products, setProducts] = useState([])

    // axios.get(url)
    //     .then( response => {
    //         console.log(response)
    //         setProducts(response.data)
    //     })
    //     .catch( error => console.log(error.message))
    //     .finally( () => console.log('requête Get terminé'))

    // -> Equivalent de ce qui est écrit au dessus
    // const get = async () => {
    //     try{
    //         const response = await axios.get(url);
    //         setProducts(response)
    //     }
    //     catch (error){
    //         console.log(error.message)
    //     }
    // }
     
    // Version 2: bonne pratique
    // 1. j'utilise un useState() pour stocker les données de mon get
    const [products, setProducts] = useState([])

    //2. J'utilise un useEffect() qui me permettra d'effectuer le get au montage du composant

    useEffect( () => {
    //3. Dans le useEffect(), on crée une fonction pour faire son GET
        const fetchData = () => {
            axios.get(url)
            .then( response => {
                console.log(response)
                setProducts(response.data)
            })
            .catch( error => console.log(error.message))
            .finally( () => console.log('requête Get terminé'))
        }
        fetchData()
    }, []);

    // _________________________REQUETE POST____________________________________

    const addProduct = (e) => {
        // Je veux éviter que le composant se recharge quand je vais soumettre mon formulaire
        e.preventDefault();

        const formData = new FormData(e.target);

        const newProduct = {
            category: formData.get('category'),
            name: formData.get('name'),
            number: formData.get('number'),
            price: formData.get('price')
        }

        console.log('formdata: ', formData);
        console.log('nouveau produit: ', newProduct);

        axios.post(url, newProduct)
            .then(response => {
                console.log('réponse du axios.get: ', response);
                // Ligne ci-dessous permet de mettre à jour le tableau affiché, sans avoir besoin de refaire un get. 
                // => On est dans le .then donc on est sûre que le POST a bien créé le nouvel objet
                setProducts((prevProducts) => [...prevProducts, response.data])
            })
            .catch(error => console.log("Une erreur s'est produite", error))
    }

    return(
        <>
            <h1>Les requêtes</h1>
            <h2>Rappel</h2>
            <p>
                <a className="underline" href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods"></a>
            </p>
            <strong>En résumé: </strong>
            <ul className="pl-5 list-dics">
                <li>
                    <strong>GET: </strong> Sert à récupérer des données
                </li>
                <li>
                    <strong>POST: </strong> Utilisé avec un body, très souvent en JSON (ou xml sur d'anciennes appli.) Très utilisé pour les 'CREATE', en envoyant un objet dnas le 
                    'body' de la requête
                </li>
                <li>
                    <strong>PUT: </strong> Meme logique que le post à la différence qu'on l'utilise pour mettre àjour une ressource
                </li>
                <li>
                    <strong>DELETE: </strong> Utilisé pour supprimer une ressource. (En général, il existe des méthode 'DeleteById' sur les API backend)
                </li>
            </ul>

            <h2>Les requête avec la bilbliothèque <strong>'axios'</strong></h2>
            <a className="underline" href="https://axios-http.com/fr/docs/example">documentation axios</a>

            <p className="pt-5">Les adresses avec notre JSON server:</p>
            <ul className="pl-5 list-dics">
                <li>
                    <strong>GET: </strong>  http://localhost:3001/products
                </li>
                <li>
                    <strong>POST: </strong> http://localhost:3001/products
                </li>
                <li>
                    <strong>PUT: </strong> http://localhost:3001/products/id
                </li>
                <li>
                    <strong>DELETE: </strong> http://localhost:3001/products/id
                </li>
            </ul>
            <p>
                Si j'utilise uniquement un useState() et que je met à jour avec le 'set' dans mon .then, je vais avoir des requêtes qui se lancent en boucle sans jamais s'arrêter.
                En effet, la requête est déclenchée à chaque rendu du composant. A la fin du get, la requête se relance, ce qui remodifie product, se qui redéclencje la requête etc ..
            </p>

            <div className="border m-5 p-5">
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.map ((product) =>
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.number}</td>
                            <td>{product.category}</td>
                        </tr> 
                        )}
                    </tbody>
                </table>
                {/* FORMULAIRE:  */}
                <div className="py-10 border-t">
                    <h2>Requête post:</h2>
                    <form onSubmit={addProduct} className="p-5 border">
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            <input 
                                name="name"
                                placeholder="Nom du produit: "
                                type="text" 
                                className="flex input input-bordered"
                            />
                            <input 
                                name="number"
                                placeholder="Quantité"
                                type="number" 
                                className="flex input input-bordered"
                            />
                            <input 
                                name="price"
                                placeholder="Prix"
                                type="number" 
                                className="flex input input-bordered"
                            />
                              <input 
                                name="category"
                                placeholder="catégorie"
                                type="text" 
                                className="flex input input-bordered"
                            />
                        </div>
                        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Ajouter le produit </button>
                    </form>                
                </div>
            </div>
        </>
    )
}

export default RequetesApi