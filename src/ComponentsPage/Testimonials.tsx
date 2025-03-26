import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle } from "lucide-react";

function Testimonials() {
  return (
    <>
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-700">
                Nossas Soluções
              </h2>
              <p className="mx-auto max-w-[700px] text-yellow-800 md:text-xl">
                Conheça nossos serviços e veja como podemos ajudar seu negócio a crescer com eficiência tributária.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Compliance Tributário */}
            <Card className="border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all">
              <CardHeader>
                <CardTitle className="text-yellow-700 group-hover:text-white transition-all">
                  Compliance Tributário
                </CardTitle>
                <CardDescription className="text-yellow-800 group-hover:text-white transition-all">
                  Conformidade fiscal para sua empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-800 group-hover:text-white transition-all">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Auditoria dos processos fiscais</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Implantação de processos tributários</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Revisão da base de cálculo de impostos</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Recuperação de créditos tributários</li>
                </ul>
              </CardContent>
            </Card>

            {/* Planejamento Tributário */}
            <Card className="border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all">
              <CardHeader>
                <CardTitle className="text-yellow-700 group-hover:text-white transition-all">
                  Planejamento Tributário
                </CardTitle>
                <CardDescription className="text-yellow-800 group-hover:text-white transition-all">
                  Estratégias para otimizar sua carga tributária
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-800 group-hover:text-white transition-all">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Análise das melhores opções fiscais</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Redução legal da carga tributária</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Planejamento estratégico para o futuro</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Monitoramento contínuo das mudanças fiscais</li>
                </ul>
              </CardContent>
            </Card>

            {/* Recuperação de Impostos */}
            <Card className="border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all">
              <CardHeader>
                <CardTitle className="text-yellow-700 group-hover:text-white transition-all">
                  Recuperação de Impostos
                </CardTitle>
                <CardDescription className="text-yellow-800 group-hover:text-white transition-all">
                  Recupere tributos pagos indevidamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-800 group-hover:text-white transition-all">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Identificação de tributos pagos a maior</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Revisão detalhada de pagamentos</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Solicitação de restituição e compensação</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Assessoria para regularização tributária</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
