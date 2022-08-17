export interface ICreateProduct {
  name: string;
  keywords: string;
  visible: 'invisible' | 'visible';
  description_text: string | null;
  description: string;
}
