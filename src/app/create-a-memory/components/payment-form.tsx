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
    if (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ isLoading }) => (
        <div className="flex gap-8 flex-col">
          <PaymentElement />
          <div className="flex gap-4">
            <Button isLoading={isLoading} type="submit" title="Continuar" />
          </div>
        </div>
      )}
    </Form>
  );
}
