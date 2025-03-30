
import logo from "../../public/logo.jpg";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2 ml-9">
            {/* FAZER A PARADA DO ICON PARA MUDAR AS OP */}
            <img
              src={logo}
              alt="Logo" 
              className="h-14 w-14 rounded-full border-2 border-yellow-700 shadow-lg"
            />
            <span className="text-xl font-bold">Tax Consultoria</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary">
              Serviços
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary">
              Sobre Nós
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testemunhas
            </a>
          </nav>
          <a href="#contact" className="px-6 py-2 rounded-lg text-yellow-700 font-medium border border-yellow-700 bg-white shadow-md transition-all duration-200 ease-in-out hover:bg-yellow-700 hover:text-white ">Vamos Começar</a>
        </div>
      </header>

    </>
  )
}

export default Header