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
                
                <h5>Nome</h5>
                <input className="input" type="text" placeholder="Digite seu nome" onChange={(e)=>setName(e.target.value)} value={name}/>

                                
                <h5>E-mail</h5>
                <input className="input" type="text" placeholder="Digite seu E-mail" onChange={(e)=>setEmail(e.target.value)} value={email} />

                <h5>Watsapp</h5>
                <input className="input" type="text" placeholder="Digite seu Whatsapp" onChange={(e)=>{setWhatsapp(e.target.value)}} value={whatsapp}/>
                <span className="spanWatsapp">Caso tenha whatsapp, informe para ficar mais fácil o contato.</span>

                <h5>Menssagem</h5>
                <textarea className="textarea" placeholder="Digite sua Menssagem" onChange={(e)=>{setMessage(e.target.value)}} value={message}>

                </textarea>    

                <input type="submit" className="sendButton" value="Enviar"/>

            </form>
            
        </section>
    );

}

export default Contact;