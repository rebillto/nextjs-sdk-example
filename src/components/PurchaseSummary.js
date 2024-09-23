export default function PurchaseSummary({ selectedClub, selectedBenefits }) {
  const totalPrice =
    selectedClub.price +
    selectedBenefits.reduce((sum, benefit) => sum + benefit.price, 0);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white w-full max-w-lg">
        <h3 className="text-2xl font-bold mb-4 text-center">
          ¡Diseñado para ti!
        </h3>
        <p className="mb-4 text-center">
          En base a la selección que realizaste anteriormente, te entregamos
          este super plan para que te suscribas y lo disfrutes.
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <h4 className="text-xl font-bold mb-2 text-center">
            {selectedClub.name} {selectedBenefits.map((b) => b.name).join(" ")}
          </h4>
          <div className="text-3xl font-bold mb-4 text-center">
            USD {totalPrice}{" "}
            <span className="text-sm font-normal">/ mensuales</span>
          </div>
          <ul className="space-y-2">
            <li>✓ {selectedClub.miles} Millas mensuales</li>
            <li>✓ Categoría Gold*</li>
            <li>✓ {selectedClub.discountMiles} Off en compra de Millas</li>
            <li>
              ✓ {selectedClub.discountPassages} devolución de Millas al canjear
              pasajes
            </li>
            <li>✓ 1 Transferencia de Millas gratis al año</li>
            <li>✓ Promociones exclusivas</li>
          </ul>
        </div>
        <p className="mt-4 text-sm text-center">
          El cobro a la tarjeta se realizará en USD o en la moneda local según
          el tipo de cambio definido por tu banco. La permanencia mínima para tu
          suscripción es de 3 meses.
        </p>
      </div>
    </div>
  );
}
