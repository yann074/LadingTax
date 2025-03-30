import { useState } from "react";
import { Button } from "../components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
//import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [motivo, setMotivo] = useState("");
  //const [message, setMessage] = useState("");

  function send_email(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name === "" || email === "" || telefone === "" || motivo === "") {
      alert("Preencha Todos os Campos");
      return;
    }

    //const template_params = {
    //  from_name: name,
    //  message: message,
    //  email: email,
    //};
    
    //emailjs.send(//id, templates, template_params, public key).then((response) => {
    //console.log("EMAILENVIADO", response.status, response.text)
    //setName = '',
    //setEmail = '',
    //setTelefone = '',
    //setMotivo = '',
    //}, (err) => {
    //console.log("ERROR ", err)
    //})
  }

  return (
    <section id="contact" className="w-full py-1 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-bold text-yellow-700">Entre em Contato</h2>
            <p className="text-gray-700 mt-4">
              Tem dúvidas ou quer começar? Entre em contato conosco hoje para uma consulta.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="h-6 w-6 text-yellow-700" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="h-6 w-6 text-yellow-700" />
                <span>info@taxconsultoria.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="h-6 w-6 text-yellow-700" />
                <span>123 Business Ave, Suite 200, New York, NY 10001</span>
              </div>
            </div>
          </div>
          <div className=" p-8 rounded-2xl shadow-md mb-9">
            <form className="space-y-4" onSubmit={send_email}>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
                placeholder="Digite Seu Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
                placeholder="Digite Seu Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
                placeholder="Digite Seu Telefone"
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
              />
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
                placeholder="Como podemos te ajudar?"
                onChange={(e) => setMotivo(e.target.value)}
                value={motivo}
              />
              <Button className="w-full hover:bg-yellow-800 text-white py-2 rounded-lg text-lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

