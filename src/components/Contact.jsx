import {useState} from 'react';
import '../assets/styles/components/contact.scss';

function Contact(){

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [message,setMessage] = useState('');

    return(
        <section>
            <h1 className="titleSection">Contato</h1>
            
            <form className="form" onSubmit={()=>{}}>
                
                <input className="input" type="text" placeholder="Digite seu nome" onChange={(e)=>setName(e.target.value)} value={name}/>

                <input className="input" type="text" placeholder="Digite seu E-mail" onChange={(e)=>setEmail(e.target.value)} value={email} />

                <input className="input" type="text" placeholder="Digite seu Whatsapp" onChange={(e)=>{setWhatsapp(e.target.value)}} value={whatsapp}/>
                <span className="spanWatsapp">Caso tenha whatsapp, informe para ficar mais fácil o contato.</span>

                <textarea className="textarea" placeholder="Digite sua Menssagem" onChange={(e)=>{setMessage(e.target.value)}} value={message}>

                </textarea>    


            </form>
        </section>
    );

}

export default Contact;