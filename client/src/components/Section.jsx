import React from 'react'

function Section({ title, cards }) {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <h2 className="text-2xl font-semibold mb-8">{title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl hover:shadow-md transition cursor-pointer"
          >
            <h3 className="font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-500 text-sm">{card.desc}</p>

            <div className="mt-6 text-xl">→</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section