import { useEffect, useState } from "react";
import ApiService from "../../service/ApiService";

function ApiWithService () {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        const monService = new ApiService("http://localhost:3001")

        monService.get('/products')
            .then((response) =>{
                setProducts(response)
                // console.log('products: ',response)
                console.log('response: ',response)
            
            })
            .catch((error) =>{
                // Ici: Ajustez en fonction de comment on souhaite traîter notre erreur
                alert(error.message)
            })
            // finally: s'exécutera après avoir reçu la réponse ou un retour d'erreur. Dans tous les cas,
            // il s'exécutera
            .finally( () => console.log('Get terminé'))
    },[]);

    return(
        <>
            <h1>Les produits récupérés en passant par mon service: </h1>
            <div className="m-10 w-4/6 m-auto">
                <table className="table table-zebra border">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.number}</td>
                                <td>{product.category}</td>
                            </tr>
                        )
                            
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ApiWithService;