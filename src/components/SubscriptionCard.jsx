import React, { useContext, useState } from "react";
import { SubscriptionContext } from "../context/SubscriptionContext";

export default function SubscriptionCard({ plan, billing }) {

  const {
    selectedPlan,
    activatePlan,
    setSelectedPlan,
    loading
  } = useContext(SubscriptionContext);

  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

  // Check if this card is active
  const isActive = selectedPlan === plan.name;

  // Decide price based on billing type
  const price =
    billing === "monthly"
      ? `₹${plan.monthly}/mo`
      : `₹${plan.yearly}/yr`;

  return (
    <>
      {/* CARD */}
      <div
        className={`card ${isActive ? "active" : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >

        {/* Recommended badge */}
        {plan.recommended && (
          <div className="badge">⭐ Most Popular</div>
        )}

        {/* Plan Name */}
        <h2>{plan.name}</h2>

        {/* Price */}
        <p>{price}</p>

        {/* Button Logic */}
        {!isActive ? (
          <button onClick={() => activatePlan(plan.name)}>
            {loading ? "Activating..." : "Choose Plan"}
          </button>
        ) : (
          <button onClick={() => setShowModal(true)}>
            Cancel Subscription
          </button>
        )}

        {/* Benefits on Hover */}
        {hover && (
          <ul>
            {plan.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        )}

      </div>

      {/* CENTER MODAL POPUP */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h3>Are you sure you want to cancel?</h3>

            <div className="modal-buttons">

              <button
                onClick={() => {
                  setSelectedPlan("");
                  setShowModal(false);
                }}
              >
                Yes
              </button>

              <button onClick={() => setShowModal(false)}>
                No
              </button>

            </div>

          </div>
        </div>
      )}

    </>
  );
}