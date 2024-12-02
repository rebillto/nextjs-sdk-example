export default function ProgressBar({ currentStep }) {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center space-x-4 flex-wrap justify-center sm:space-x-4">
        {[1, 2].map((step) => (
          <div
            key={step}
            className="flex flex-col items-center sm:flex-row sm:items-center"
          >
            <div
              className={`w-8 h-8 rounded-full ${
                step <= currentStep
                  ? "bg-teal-900 text-white"
                  : "bg-gray-300 text-gray-500"
              } flex items-center justify-center`}
            >
              {step}
            </div>
            <div
              className={`text-sm text-center mt-2 sm:mt-0 sm:ml-2 ${
                step <= currentStep ? "font-semibold" : "text-gray-500"
              }`}
            >
              {step === 1 && "Choose your Club"}
              {step === 2 && "Finish"}
            </div>
            {step < 2 && (
              <div className="hidden sm:block w-16 h-1 bg-gray-300 ml-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
