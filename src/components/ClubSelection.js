import ClubCard from "./ClubCard";

export default function ClubSelection({ clubOptions, onSelect }) {
  return (
    <>
      <div className="text-center mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4">
            You can subscribe to our Clubs, which give you REBILL Pass miles every
            month
        </h2>
        <p className="text-gray-600">
          to exchange your dream trip and exclusive discounts for you. Join the
          world of REBILL Pass benefits.
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
