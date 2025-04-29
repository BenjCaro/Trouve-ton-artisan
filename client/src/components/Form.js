import '../assets/css/form.scss';


const Form = () => {
    return (
        <>
            <form>
                 <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nom</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Votre Nom"/>
                </div>
                <div class="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Votre adresse mail" name="email"/>
                </div>
                <div class="mb-3">
                    <label for="object" class="form-label">Objet</label>
                    <select className="form-select" id='object' name='object' aria-label="Default select example">
                        <option selected>Choissisez l'objet du message</option>
                        <option value="1">Renseignements</option>
                        <option value="2">Devis</option>
                        <option value="3">Rendez-vous</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name='message' rows="3"></textarea>
                </div>
            </form>
        </>
    );

};


export default Form;