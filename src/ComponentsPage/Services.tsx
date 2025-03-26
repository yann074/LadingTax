import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { BarChart3, FileText, TrendingUp } from "lucide-react";

function Services() {
  return (
    <>
      <section id="services" className="w-full py-12 md:py-24 lg:py-28 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Nossos Serviços</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Soluções fiscais abrangentes, personalizadas para suas necessidades específicas
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-yellow-700 mb-2" />
                <CardTitle>Planejamento Tributário</CardTitle>
                <CardDescription>
                  Planejamento estratégico para minimizar encargos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                  Desenvolvemos estratégias fiscais personalizadas para ajudar você a reduzir legalmente sua carga
                  tributária e maximizar a economia.
                </p>
              </CardContent>
            </Card>
            <Card className="border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all">
              <CardHeader>
                <FileText className="h-10 w-10 text-yellow-700 mb-2" />
                <CardTitle>Preparação de Impostos</CardTitle>
                <CardDescription>
                  Serviços precisos e pontuais de declaração de impostos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                  Nossos especialistas garantem que suas declarações sejam preparadas com precisão e enviadas no
                  prazo, evitando penalidades.
                </p>
              </CardContent>
            </Card>
            <Card className="border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-yellow-700 mb-2" />
                <CardTitle>Consultoria Empresarial</CardTitle>
                <CardDescription>
                  Estratégias empresariais com eficiência fiscal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                  Oferecemos orientação sobre a estruturação das operações do seu negócio para otimizar a eficiência
                  tributária e a conformidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
