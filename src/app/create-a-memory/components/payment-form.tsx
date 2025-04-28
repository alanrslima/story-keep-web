import { Button, Form } from "@/components/ui";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

export type PaymentFormProps = {
  id: string;
};

export function PaymentForm(props: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async () => {
    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3001/create-a-memory/success?id=${props.id}`,
      },
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      {() => (
        <div className="flex gap-8 flex-col">
          <PaymentElement />
          <div className="flex gap-4">
            <Button type="submit" title="Continuar" />
          </div>
        </div>
      )}
    </Form>
  );
}
