import ClubCard from "./ClubCard";

export default function ClubSelection({ clubOptions, onSelect }) {
  return (
    <>
      <div className="text-center mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Puedes suscribirte a nuestros Clubes, los que te entregan Millas LATAM
          Pass todos los meses
        </h2>
        <p className="text-gray-600">
          para canjear tu viaje soñado y descuentos exclusivos para ti. Sé parte
          del mundo de beneficios LATAM Pass.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clubOptions.map((club) => (
          <ClubCard key={club.name} club={club} onSelect={onSelect} />
        ))}
      </div>
    </>
  );
}
