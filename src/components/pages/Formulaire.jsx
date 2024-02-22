import { useState } from "react";
import { useForm } from "react-hook-form";

/* eslint-disable react/no-unescaped-entities */
function Formulaire() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit2 = (e) => {
    // Lorsqu'un formulaire est soumis; React va recharger la page (et donc l'évènement à 0)
    // En appelant 'e.preventDefault()', vous annulez ce comportement par défaut
    e.preventDefault();
    console.log(new FormData(e.target));
  };



// ______________________________________________________________________________________________
//                                  FORMULAIRE AVEC VERIF. Utilisation react-hook-form 


// useForm() est un hook de react-hook-form (Besoin d'installer cette bibliothèque pour l'utiliser)
// Register: Fonction qui nous permettra d'enregistrer les champs du formulaire
// handleSubmit: Fonction pour gérer la soumission du formulaire
// errors: Objet qui stocke toutes les erreurs de validation du formulaire

const {register, handleSubmit, formState: { errors }} = useForm()

const onSubmitWithVerif = (data) => {
    console.log("Formulaire accepté !! ",data)
}


// ______________________________________________________________________________________________

  return (
    <>
      <h1>Les formulaires</h1>

      <h2>Les champs contrôlés</h2>
      <p>
        {" "}
        En react, nous avons un concept que nous pouvons appeler les champs
        contrôlés. En utilisant le <strong>OnChange()</strong> d'une input et le
        hook useState(). Ainsi, nous pouvons mettre à jour une variable lié à
        l'input à chaque changment (donc à chasque fois qu'un caractère est
        ajouté ou supprimé).
      </p>
      <div className="p-5 mt-5 border mb-10 w-fit">
        <p>Bonjour, {name !== "" ? name : "entrez votre nom"}</p>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="mb-5 ml-5 input input-bordered"
        />
      </div>

      <h2>Les formulaires 'classique'</h2>

      <form onSubmit={handleSubmit2}>
        <input
          type="text"
          name="login"
          defaultValue="login"
          className="mb-5 ml-5 input input-bordered"
        />
        <input type="text" name="password" defaultValue="password" />
        <button className="ml-2 btn">Envoyer</button>
      </form>

{/* ____________________________________AVEC VERIF__________________________________________ */}

      <h2>Les formulaires avec react-hook-form</h2>
    
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Connexion</h2>

            <form onSubmit={handleSubmit(onSubmitWithVerif)}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        E-mail
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                        {...register("email", {
                            required: "email requis",
                            // l'objet 'pattern ci-dessous est optionnel. Si l'on ne souhaite pas avoir une validation avec un regex, on supprime les lignes ci-dessous
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Adresse e-mail invalide'
                            }
                        })}
                    />
                    {errors.email && <p  className="text-red-500 text-sm mt-1"> {errors.email.message} </p> }
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">mot de passe: </label>
                    <input
                        type="password"
                        name="email"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                        {...register("password", {
                            required: "password requis",
                            // l'objet 'pattern ci-dessous est optionnel. Si l'on ne souhaite pas avoir une validation avec un regex, on supprime les lignes ci-dessous
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-/:;,.]).{8,}$/,
                                message: 'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre, un caractère spécial et au moins 8 caractères'
                            }})}
                    />
                    {errors.password && <p  className="text-red-500 text-sm mt-1"> {errors.password.message} </p> }
                </div>
                <button
                    type="submut"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700"      
                >
                    Se connecter
                </button>
            </form>
                
        </div>

    </>
  );
}

export default Formulaire;
