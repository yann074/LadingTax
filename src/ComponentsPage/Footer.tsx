import { Facebook, Linkedin, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="w-full border-t py-4 bg-muted">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 ml-4">
            <span className="font-semibold text-yellow-800">Tax Consultoria</span>
          </div>

          <p className="text-sm text-yellow-800">
            © {new Date().getFullYear()} Tax Consultoria. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-yellow-800 hover:text-yellow-700">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-yellow-800 hover:text-yellow-700">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-yellow-800 hover:text-yellow-700">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
