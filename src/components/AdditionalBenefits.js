import AdditionalBenefitCard from "./AdditionalBenefitCard";

export default function AdditionalBenefits({
  additionalBenefits,
  selectedBenefits,
  onSelect,
  onContinue,
}) {
  return (
    <>
      <div className="text-center mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Mejora tu plan eligiendo tus{" "}
          <span className="text-pink-600">Beneficios Adicionales</span>
        </h2>
        <p className="text-gray-600">
          Te entregamos opciones para incrementar tus beneficios LATAM Pass.
          Puedes contratar cuantos Beneficios Adicionales quieras y conseguir un
          plan que te lleve más lejos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
        {additionalBenefits.map((benefit) => (
          <AdditionalBenefitCard
            key={benefit.name}
            benefit={benefit}
            onSelect={onSelect}
            isSelected={selectedBenefits.includes(benefit)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={onContinue}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Continuar
        </button>
      </div>
    </>
  );
}
