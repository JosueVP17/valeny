import valenyCrudo from "./valeny.json";
import planesCrudo from "./planes.json";

function exigir(cond: unknown, mensaje: string): asserts cond {
  if (!cond) throw new Error(`Datos inválidos: ${mensaje}`);
}

// Validación en el build: si falta algo, falla con un mensaje claro.
exigir(/^\d{11,15}$/.test(valenyCrudo.whatsapp), "valeny.json → whatsapp debe ser solo dígitos con lada de país (ej. 524111113954)");
exigir(/^https:\/\/[^/]+$/.test(valenyCrudo.dominio), "valeny.json → dominio debe ser https://… sin diagonal final");
exigir(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(valenyCrudo.correo), "valeny.json → correo no es válido");
exigir(valenyCrudo.tienda.url.startsWith("https://"), "valeny.json → tienda.url debe ser https://…");
for (const p of planesCrudo.planes) {
  exigir(p.incluye.length > 0, `planes.json → el plan "${p.id}" no tiene lista de incluidos`);
  if (!("enDesarrollo" in p && p.enDesarrollo)) {
    exigir("unico" in p && "mensual" in p, `planes.json → el plan "${p.id}" necesita unico y mensual`);
  }
}

export const valeny = valenyCrudo;
export const catalogo = planesCrudo;

export function urlWhatsApp(texto: string): string {
  return `https://wa.me/${valeny.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export function pesos(monto: number): string {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(monto);
}

export const MENSAJES = {
  general: "Hola, me interesa una web para mi restaurante.",
  listaEspera: "Hola, quiero estar en la lista de espera del plan Pro de Valeny.",
} as const;

export function mensajePlan(nombre: string): string {
  return `Hola, me interesa el plan ${nombre} para la web de mi restaurante.`;
}
