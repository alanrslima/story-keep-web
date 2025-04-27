/* eslint-disable @typescript-eslint/no-explicit-any */
export class FormUtils {
  static objectToFormData(
    obj: Record<string, any>,
    form?: FormData,
    namespace?: string
  ): FormData {
    const formData = form || new FormData();

    for (const property in obj) {
      if (
        !obj.hasOwnProperty(property) ||
        obj[property] === undefined ||
        obj[property] === null
      ) {
        continue;
      }

      const formKey = namespace ? `${namespace}[${property}]` : property;
      const value = obj[property];

      if (value instanceof Date) {
        formData.append(formKey, value.toISOString());
      } else if (value instanceof File || value instanceof Blob) {
        formData.append(formKey, value);
      } else if (
        typeof value === "object" &&
        !(value instanceof File) &&
        !(value instanceof Blob)
      ) {
        FormUtils.objectToFormData(value, formData, formKey); // Recursively process nested objects
      } else {
        formData.append(formKey, value.toString());
      }
    }

    return formData;
  }
}
