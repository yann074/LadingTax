import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle } from "lucide-react";

function Testimonials() {
  return (
    <>
      <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900">
                Nossas Soluções
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
                Conheça nossos serviços e veja como podemos ajudar seu negócio a crescer com eficiência tributária.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">

            {/* Compliance Tributário */}
            <Card className="border border-yellow-700 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-yellow-700">Compliance Tributário</CardTitle>
                <CardDescription className="text-gray-600">
                  Conformidade fiscal para sua empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Auditoria dos processos fiscais</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Implantação de processos tributários</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Revisão da base de cálculo de impostos</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Recuperação de créditos tributários</li>
                </ul>
              </CardContent>
            </Card>

            {/* Planejamento Tributário */}
            <Card className="border border-yellow-700 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-yellow-700">Planejamento Tributário</CardTitle>
                <CardDescription className="text-gray-600">
                  Estratégias para otimizar sua carga tributária
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Análise das melhores opções fiscais</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Redução legal da carga tributária</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Planejamento estratégico para o futuro</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Monitoramento contínuo das mudanças fiscais</li>
                </ul>
              </CardContent>
            </Card>

            {/* Recuperação de Impostos */}
            <Card className="border border-yellow-700 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-yellow-700">Recuperação de Impostos</CardTitle>
                <CardDescription className="text-gray-600">
                  Recupere tributos pagos indevidamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Identificação de tributos pagos a maior</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Revisão detalhada de pagamentos</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Solicitação de restituição e compensação</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-600" /> Assessoria para regularização tributária</li>
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
