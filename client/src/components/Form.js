import '../assets/css/form.scss';


const Form = () => {
    return (
        <>
                <form className='form-contact row mt-3 p-3' method='post'>
                    <fieldset className="mb-3 mt-3">
                        <label for="name" className="form-label fw-semibold">Nom</label>
                        <input type="email" className="form-items form-control" id="name" placeholder="Votre Nom" required/>
                    </fieldset>
                    <fieldset className="mb-3 ">
                        <label for="email" className="form-label fw-semibold">Email</label>
                        <input type="email" className="form-items form-control" id="email" placeholder="Votre adresse mail" name="email" required/>
                    </fieldset>
                    <fieldset className="mb-3">
                        <label for="object" className="form-label fw-semibold">Objet</label>
                        <select className="form-items form-select " id='object' name='object' aria-label="Default select example" required>
                            <option selected>Choissisez l'objet du message</option>
                            <option value="1">Renseignements</option>
                            <option value="2">Devis</option>
                            <option value="3">Rendez-vous</option>
                        </select>
                    </fieldset>
                    <fieldset className="mb-3">
                        <label for="message" className="form-label fw-semibold">Message</label>
                        <textarea className="form-items form-control" id="message" name='message' rows="3" required> </textarea>
                    </fieldset>
                    <div className='d-flex gap-3 justify-content-center mb-3'>
                        <button className='btn form-btn' type='submit'>Envoyer</button>
                        <button className='btn form-btn' type='reset'>Effacer</button>
                    </div>
                </form>
        </>
    );

};


export default Form;