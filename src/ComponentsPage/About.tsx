import { CheckCircle, Clock } from "lucide-react";

function About() {
  return (
    <>
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-700">
                  Sobre a Tax Consultoria
                </h2>
                <p className="text-yellow-800 md:text-xl">
                  Com mais de 15 anos de experiência, ajudamos milhares de clientes a lidar com situações fiscais complexas.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-yellow-700" />
                  <span className="text-yellow-800">Profissionais fiscais certificados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-yellow-700" />
                  <span className="text-yellow-800">Atendimento personalizado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-yellow-700" />
                  <span className="text-yellow-800">Atualizados com as últimas regulamentações fiscais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-yellow-700" />
                  <span className="text-yellow-800">Preços transparentes, sem taxas ocultas</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-yellow-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Clock className="h-32 w-32 text-yellow-700/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
