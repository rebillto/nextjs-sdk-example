export default function ClubCard({ club, onSelect }) {
  return (
    <div
      className={`rounded-lg overflow-hidden ${
        /* club.color || */ "bg-[#FB7185]"
      } relative`}
    >
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{club.name}</h3>
        <div className="text-3xl font-bold mb-1">
          {club.currency} {club.price}
          <span className="text-sm font-normal">/ month</span>
        </div>
        <ul className="space-y-2 mt-4">
          <li>{club.miles} Millas</li>
          <li>Discounts on Passages: {club.discountPassages}</li>
          <li>Discounts on Miles: {club.discountMiles}</li>
          <li>Exclusive Promotions</li>
        </ul>
      </div>
      <div className="bg-white p-4">
        <button
          className="w-full bg-teal-900 text-white py-2 rounded-md hover:bg-teal-800 transition duration-300"
          onClick={() => onSelect(club)}
        >
          I want it!
        </button>
      </div>
      {club.mostChosen && (
        <div className="absolute top-0 right-0 bg-cyan-600 text-white px-2 py-1 text-xs">
          Preferred
        </div>
      )}
    </div>
  );
}
