"use client";

import { withAuth } from "@/components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StepLayout } from "../components/step-layout";
import { useMemory } from "@/hooks/use-memory";
import { PaymentForm } from "../components/payment-form";
import { useQueryParams } from "@/hooks/use-query-params";

const stripePromise = loadStripe(
  "pk_test_51RhsrgBDMOmWm84XVMLSr9oDFF4dCs4O2duGRorynFDwAHdLyaQBv3wEi7vuHY2VWgsm9mJ8KGKDd3vV5e0jp0Se00feEOy2mM"
);

function CreateAMemoryPayment() {
  const { clientSecret } = useMemory();

  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();

  return (
    <StepLayout
      previousPercentage={80}
      percentage={100}
      previousPath={`plans?id=${screenParams.id}`}
    >
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret,
          appearance: { theme: "flat" },
        }}
      >
        {clientSecret && screenParams.id && (
          <PaymentForm id={screenParams.id} />
        )}
      </Elements>
    </StepLayout>
  );
}

export default withAuth(CreateAMemoryPayment);
