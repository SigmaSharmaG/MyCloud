import React from 'react'
import {Link} from "react-router-dom"

import Navbar2 from '../components/Navbar2.jsx';


const Price = () => {
   const plans= [
    {
    name: "Business",
    price: "$15",
    oldPrice: "$20",
    desc: "Team collaboration for any business",
    features: [
      "Organization-wide collaboration",
      "Upload files up to 5GB",
      "Unlimited storage",
      "Technical support during local business hours",
    ],
    highlight: false,
  },
  {
    name: "Business Plus",
    price: "$25",
    oldPrice: "$33",
    desc: "Content management for your entire organization",
    features: [
      "Unlimited external collaborators",
      "Upload files up to 15GB",
      "Unlimited storage",
      "Built-in integrations",
    ],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "$35",
    oldPrice: "$47",
    desc: "Advanced content management and data protection",
    features: [
      "Unlimited external collaborators",
      "Upload files up to 50GB",
      "Unlimited storage",
      "Advanced security",
    ],
    highlight: true, 
  },
  {
    name: "Enterprise Plus",
    price: "Custom",
    desc: "The power of the Content Cloud in one simple plan",
    features: [
      "Upload files up to 150GB",
      "Box Shield",
      "Box Governance",
      "Box Relay",
    ],
    highlight: false,
  },
];


  return (
    <>
    <Navbar2/>
    <div className="bg-gray-50 py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Choose the best plan for your business
        </h2>

        <div className="flex justify-center mt-4 gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">
            Individuals and Teams
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">
            Business Plans
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between
            ${
              plan.highlight
                ? "border-2 border-blue-600 scale-105"
                : "border"
            }`}
          >
            {/* Badge */}
            {plan.highlight && (
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </span>
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="mb-4">
              {plan.oldPrice && (
                <span className="line-through text-gray-400 mr-2">
                  {plan.oldPrice}
                </span>
              )}
              <span className="text-3xl font-bold text-gray-900">
                {plan.price}
              </span>
              {plan.price !== "Custom" && (
                <p className="text-sm text-gray-500">per user/month</p>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-4">{plan.desc}</p>

            {/* Button */}
            <button
              className={`w-full py-2 rounded-lg font-medium mb-4 transition
              ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {plan.price === "Custom" ? "Contact us" : "Buy It"}
            </button>

            {/* Features */}
            <ul className="space-y-2 text-sm text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
      </>
  )
}

export default Price