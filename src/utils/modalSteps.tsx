import { Code2, Rocket, Sparkles } from "lucide-react";

export const steps = [
  {
    title: "Bienvenido a Better Components",
    description: "La plataforma definitiva para transformar tus ideas en componentes de React usando Inteligencia Artificial.",
    icon: <Sparkles className="w-12 h-12 text-primary-500" />,
    color: "bg-primary-600",
    lightColor: "bg-primary-100",
    shadow: "shadow-primary-300"
  },
  {
    title: "Describe tu componente",
    description: "Simplemente escribe lo que necesitas. Desde un botón animado hasta un dashboard complejo. La IA se encarga del código pesado.",
    icon: <Code2 className="w-12 h-12 text-secondary-500" />,
    color: "bg-secondary-600",
    lightColor: "bg-secondary-100",
    shadow: "shadow-secondary-300"
  },
  {
    title: "¡Listo para despegar!",
    description: "Este modal ha sido realizado con Better Components",
    icon: <Rocket className="w-12 h-12 text-tertiary-500" />,
    color: "bg-tertiary-600",
    lightColor: "bg-tertiary-100",
    shadow: "shadow-tertiary-300"
  }
];