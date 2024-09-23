export default function ClubCard({ club, onSelect }) {
  return (
    <div
      className={`rounded-lg overflow-hidden ${
        /* club.color || */ "bg-red-400"
      } relative`}
    >
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{club.name}</h3>
        <div className="text-3xl font-bold mb-1">
          {club.currency} {club.price}
          <span className="text-sm font-normal">/ mensual</span>
        </div>
        <ul className="space-y-2 mt-4">
          <li>{club.miles} Millas</li>
          <li>Descuento en pasajes: {club.discountPassages}</li>
          <li>Descuento en compra de Millas: {club.discountMiles}</li>
          <li>Promociones exclusivas</li>
        </ul>
      </div>
      <div className="bg-white p-4">
        <button
          className="w-full bg-indigo-900 text-white py-2 rounded-md hover:bg-indigo-800 transition duration-300"
          onClick={() => onSelect(club)}
        >
          ¡Lo quiero!
        </button>
      </div>
      {club.mostChosen && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-xs">
          El más elegido
        </div>
      )}
    </div>
  );
}
