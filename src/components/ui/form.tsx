/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useState } from "react";

export type FormProps = {
  children(props: {
    isLoading: boolean;
    error?: { title: string; description: string };
  }): React.ReactNode;
  onSubmit(
    data: Record<string, string>,
    evt: React.FormEvent<HTMLFormElement>
  ): Promise<void>;
};

export function Form(props: FormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ title: string; description: string }>();
  const formRef = useRef<HTMLFormElement>(null);

  function errorHandler(err: any) {
    if (err?.response?.data?.errors) {
      const [errorData] = err?.response?.data?.errors;
      setError({ title: errorData.message, description: errorData.desciption });
    } else {
      setError({ title: "Ops", description: err.message });
    }
  }

  async function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    try {
      evt.preventDefault();
      setIsLoading(true);
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const data: Record<string, string> = {};
        for (const [key, value] of formData.entries()) {
          data[key] = value.toString();
        }
        await props.onSubmit(data, evt);
      }
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      {props.children({ isLoading, error })}
    </form>
  );
}

// import { ReactNode, useEffect } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// // import { Container, Fieldset } from './form.styles'
// import {
//   FormProvider,
//   useForm,
//   useFormContext,
//   UseFormReturn,
// } from "react-hook-form";
// import {} from "react-hook-form";
// import * as yup from "yup";

// export type OnSubmitMethods = UseFormReturn;

// export type FormProps = {
//   children: (methods: UseFormReturn) => ReactNode;
//   onSubmit: (
//     data: { [key: string]: string },
//     methods: OnSubmitMethods
//   ) => Promise<void>;
//   schema?: yup.ObjectSchema<any>;
//   defaultValues?: any;
//   disabled?: boolean;
//   isLoading?: boolean;
//   devTools?: boolean;
// };

// const RenderForm = ({
//   children,
//   onSubmit,
//   isLoading,
//   disabled,
//   ...props
// }: Omit<FormProps, "schema">) => {
//   const methods = useFormContext();

//   return (
//     <form
//       onSubmit={methods.handleSubmit((data) => onSubmit(data, methods))}
//       {...props}
//     >
//       <fieldset
//         disabled={disabled || methods?.formState?.isSubmitting || isLoading}
//       >
//         {children({ ...methods })}
//       </fieldset>
//     </form>
//   );
// };

// export function Form({
//   children,
//   onSubmit,
//   schema,
//   defaultValues,
//   disabled,
//   isLoading,
//   // devTools,
//   ...props
// }: FormProps) {
//   const methods = useForm({
//     resolver: schema ? yupResolver(schema) : undefined,
//     defaultValues,
//   });

//   useEffect(() => {
//     methods.reset({ ...defaultValues });
//   }, [defaultValues, methods]);

//   return (
//     <>
//       <FormProvider {...methods}>
//         <RenderForm
//           onSubmit={onSubmit}
//           disabled={disabled}
//           isLoading={isLoading}
//           {...props}
//         >
//           {children}
//         </RenderForm>
//       </FormProvider>
//       {/* {devTools && <DevTool control={methods.control} />} */}
//     </>
//   );
// }
