"use client";

import { withAuth } from "@/components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StepLayout } from "../components/step-layout";
import { useMemory } from "@/hooks/use-memory";
import { PaymentForm } from "../components/payment-form";
import { useQueryParams } from "@/hooks/use-query-params";

const stripePromise = loadStripe(
  "pk_test_51OGJDBKmfbamMwdpgyoGb2ZNrLmpNwXACS53gMNaztK5tVgliwtelPAY31aLhLS84gAgHPXn5T8BpIkpaKRM5Nhz00ThfrVeAO"
);

function CreateAMemoryPayment() {
  const { clientSecret } = useMemory();
  const { getQueryParam } = useQueryParams();
  const id = getQueryParam("id");

  return (
    <StepLayout previousPercentage={80} percentage={100} previousPath="plans">
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret,
          appearance: { theme: "flat" },
        }}
      >
        {clientSecret && id && <PaymentForm id={id} />}
      </Elements>
    </StepLayout>
  );
}

export default withAuth(CreateAMemoryPayment);
