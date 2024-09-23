export const clubOptions = [
  {
    name: "Club Lite",
    price: 10,
    currency: "USD",
    miles: 500,
    discountPassages: "-",
    discountMiles: "10%",
    color: "bg-gradient-to-r from-green-400 to-green-500",
  },
  {
    name: "Club Basic",
    price: 18,
    currency: "USD",
    miles: 1000,
    discountPassages: "5%",
    discountMiles: "15%",
    color: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    name: "Club Prime",
    price: 50,
    currency: "USD",
    miles: 3000,
    discountPassages: "10%",
    discountMiles: "20%",
    color: "bg-gradient-to-r from-blue-400 to-blue-500",
    mostChosen: true,
  },
  {
    name: "Club Deluxe",
    price: 98,
    currency: "USD",
    miles: 6000,
    discountPassages: "15%",
    discountMiles: "30%",
    color: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
];

export const additionalBenefits = [
  {
    name: "+ Vuelo",
    price: 8,
    currency: "USD",
    benefits: [
      "Categoría Gold*",
      "4 meses de cortesía al año para Upgrade en Sudamérica",
      "Extra acumulación en vuelos LATAM",
      "Selección de asiento gratis**",
      "Check-in y embarque preferente",
      "Equipaje prioritario",
    ],
  },
  {
    name: "+ Millas",
    price: 64,
    currency: "USD",
    benefits: ["4.000 Millas mensuales"],
  },
];
