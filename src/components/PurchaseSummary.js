export default function PurchaseSummary({ selectedClub }) {
  const totalPrice = selectedClub.price;

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-lg p-6 text-white w-full max-w-lg">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Designed for you!
        </h3>
        <p className="mb-4 text-center">
          Based on the selection you made earlier, we offer you this super plan
          so you can subscribe and enjoy it.
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <h4 className="text-xl font-bold mb-2 text-center">
            {selectedClub.name}
          </h4>
          <div className="text-3xl font-bold mb-4 text-center">
            USD {totalPrice}{" "}
            <span className="text-sm font-normal">/ mensuales</span>
          </div>
          <ul className="space-y-2">
            <li>✓ {selectedClub.miles} Miles per month</li>
            <li>✓ Gold category*</li>
            <li>✓ {selectedClub.discountMiles} Off on Miles purchase</li>
            <li>
              ✓ {selectedClub.discountPassages} Miles back when you exchange
              passages
            </li>
            <li>✓ 1 Miles transfer per year</li>
            <li>✓ Exclusive promotions</li>
          </ul>
        </div>
        <p className="mt-4 text-sm text-center">
          The minimum duration for your subscription is 3 months.
        </p>
      </div>
    </div>
  );
}
