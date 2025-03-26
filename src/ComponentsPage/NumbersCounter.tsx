import React, { useState, useEffect, useRef } from "react";
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
    <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
      {count.map((count, i) => (
        <Card key={i} className="border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all">
          <CardHeader>
            <BarChart3 className="h-10 w-10 text-yellow-700 mb-2 group-hover:text-white transition-all" />
            <CardTitle className="text-4xl font-bold text-primary">+{count}</CardTitle>
            <CardDescription>{numdata[i].data}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground group-hover:text-white transition-all">
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
