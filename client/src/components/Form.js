import '../assets/css/form.scss';
import { useState } from 'react';


const Form = () => {

        const [formData, setFormData] = useState({
        name: "",
        email: "",
        objet: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

           const response = await fetch('http://localhost:5000/contact', {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                         },
                body: JSON.stringify(formData)
            });
            
            console.log(formData);
            const data = await response.json();
            console.log(data);
            
           if(data.success === true) {
                alert('Message envoyé');
                setFormData({name: "",email: "", objet: "",message: "",});

           } else {
                alert("Echec dans l'envoi du formulaire");
           }
            
        } catch (error) {
            console.error("Erreur :", error);
        }
    };
    return (
        <>
                <form className='form-contact row mt-3 p-3' method='post' onSubmit={handleSubmit}>
                    <fieldset className="mb-3 mt-3">
                        <label for="name" className="form-label fw-semibold">Nom</label>
                        <input type="text" className="form-items form-control" id="name" name="name" value={formData.name} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})} placeholder="Votre Nom" required/>
                    </fieldset>
                    <fieldset className="mb-3 ">
                        <label for="email" className="form-label fw-semibold">Email</label>
                        <input type="email" className="form-items form-control" id="email" value={formData.email}  onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}  placeholder="Votre adresse mail" name="email" required/>
                    </fieldset>
                    <fieldset className="mb-3">
                        <label for="object" className="form-label fw-semibold">Objet</label>
                        <select className="form-items form-select " id='object' name='objet' value={formData.objet} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}  aria-label="Default select example" required>
                            <option selected>Choissisez l'objet du message</option>
                            <option value="renseignement">Renseignements</option>
                            <option value="devis">Devis</option>
                            <option value="meeting">Rendez-vous</option>
                        </select>
                    </fieldset>
                    <fieldset className="mb-3">
                        <label for="message" className="form-label fw-semibold">Message</label>
                        <textarea className="form-items form-control" id="message" value={formData.message} onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}   name='message' rows="3" required> </textarea>
                    </fieldset>
                    <div className='d-flex gap-3 justify-content-center mb-3'>
                        <button className='btn form-btn' type='submit'>Envoyer</button>
                        <button className='btn form-btn' type='button' onClick={e => setFormData({name: "",email: "", objet: "",message: "",})}>Effacer</button>
                    </div>
                </form>
        </>
    );
};


export default Form;