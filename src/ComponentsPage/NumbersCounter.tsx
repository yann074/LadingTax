import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { BarChart3 } from "lucide-react";

// Dados para os cards
const numdata = [
  { num: 600, data: "Projetos Feitos" },
  { num: 400, data: "Clientes Satisfeitos" },
  { num: 300, data: "Consultorias Realizadas" },
];

function NumbersCounter() {
  const [count, setCounter] = useState(numdata.map(() => 0));
  const [hasCounted, setHasCounted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [hasCounted]);

  useEffect(() => {
    if (hasCounted) {
      const interval = setInterval(() => {
        setCounter((prevCounts) =>
          prevCounts.map((count, i) =>
            count < numdata[i].num ? count + 10 : numdata[i].num
          )
        );
      }, 20);
      return () => clearInterval(interval);
    }
  }, [hasCounted]);

  return (
    <div ref={counterRef} className="flex items-center gap-5 py-12 w-full justify-center flex-wrap">
      {count.map((count, i) => (
        <Card
          key={i}
          className="border-yellow-700 group hover:scale-105 transition-transform w-[18rem] p-4 shadow-md"
        >
          <CardHeader className="flex items-center flex-col text-center">
            <BarChart3 className="h-10 w-10 text-yellow-700 mb-2 transition-all group-hover:text-yellow-500" />
            <CardTitle className="text-4xl font-bold text-primary">+{count}</CardTitle>
            <CardDescription className="text-gray-600">{numdata[i].data}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground text-center transition-all group-hover:text-yellow-700">
              Desenvolvemos estratégias fiscais personalizadas para ajudar você a reduzir legalmente sua carga
              tributária e maximizar a economia.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default NumbersCounter;
