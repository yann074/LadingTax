import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-700">
                  Entre em Contato
                </h2>
                <p className="text-yellow-800 md:text-xl">
                  Tem dúvidas ou quer começar? Entre em contato conosco hoje para uma consulta.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-yellow-700" />
                  <span className="text-yellow-800">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-yellow-700" />
                  <span className="text-yellow-800">info@taxconsultoria.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-yellow-700" />
                  <span className="text-yellow-800">123 Business Ave, Suite 200, New York, NY 10001</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Input placeholder="Nome" className="text-yellow-800 placeholder-yellow-800" />
              <Input placeholder="E-mail" className="text-yellow-800 placeholder-yellow-800" />
              <Input placeholder="Telefone" className="text-yellow-800 placeholder-yellow-800" />
              <Textarea placeholder="Como podemos te ajudar?" className="min-h-[120px] text-yellow-800 placeholder-yellow-800" />
              <Button className="bg-yellow-700 hover:bg-yellow-800 text-white">Enviar Mensagem</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
