export type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      placeholder="Digite aqui"
      {...props}
      className="bg-transparent  text-3xl md:text-4xl font-montserrat outline-none font-bold overflow-y-hidden resize-none"
    />
  );
}
