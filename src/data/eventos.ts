export interface Item {
    id: number;
    type: "event" | "promo";
    date: string;
    title: string;
    image: string;
    color: string; // tailwind text-color (ej: "text-pink-400")
}

export const items: Item[] = [
    {
        id: 1,
        type: "event",
        date: "Sábado 21 de Septiembre",
        title: "DJ en vivo",
        image: "/images/evento1.webp",
        color: "text-pink-400",
    },
    {
        id: 2,
        type: "event",
        date: "Domingo 22 de Septiembre",
        title: "Noche de luces",
        image: "/images/evento2.webp",
        color: "text-blue-400",
    },
    {
        id: 3,
        type: "promo",
        date: "Viernes 20 de Septiembre",
        title: "Tragos 2x1",
        image: "/images/promo1.webp",
        color: "text-amber-400",
    },
    {
        id: 4,
        type: "promo",
        date: "Promo especial",
        title: "Si es tu 4° finde seguido, ¡pasa gratis!",
        image: "/images/promo2.webp",
        color: "text-green-400",
    },
];
