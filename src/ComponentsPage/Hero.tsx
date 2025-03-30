import { Button } from "../components/ui/button";
import { TrendingUp } from "lucide-react";

function Hero() {
  return (
    <>
      <section className=" ml-20  py-18 md:py-24 lg:py-21 xl:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Serviços Profissionais de Consultoria Tributária
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Soluções fiscais especializadas para indivíduos e empresas. Ajudamos você a navegar por
                  regulamentações tributárias complexas e maximizar seus retornos.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>Agendar Consulta</Button>
                <Button variant="outline">Saiba Mais</Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] rounded-full bg-muted flex items-center justify-center">
                <TrendingUp className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
