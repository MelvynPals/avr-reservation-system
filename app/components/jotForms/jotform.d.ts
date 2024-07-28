interface JFObject {
  initialize: (options: { apiKey: string }) => void;
  getForm: (formId: number) => Promise<any>;
}

declare global {
  interface Window {
    JF: JFObject;
  }
}

export { };