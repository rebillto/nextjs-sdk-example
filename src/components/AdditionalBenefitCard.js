import { PlusIcon } from "lucide-react";

export default function AdditionalBenefitCard({
  benefit,
  onSelect,
  isSelected,
}) {
  return (
    <div className="border rounded-lg overflow-hidden flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-indigo-900">
          {benefit.name}
        </h3>
        <div className="text-3xl font-bold mb-4 text-indigo-900">
          {benefit.currency} {benefit.price}
          <span className="text-sm font-normal">/ mensual</span>
        </div>
        <ul className="space-y-2">
          {benefit.benefits.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-4">
        <button
          className={`w-full py-2 rounded-md transition duration-300 flex items-center justify-center ${
            isSelected
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-white text-indigo-900 border border-indigo-900 hover:bg-indigo-100"
          }`}
          onClick={() => onSelect(benefit)}
        >
          {isSelected ? "Seleccionado" : "Agregar"}
          {!isSelected && <PlusIcon className="ml-2 h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}
