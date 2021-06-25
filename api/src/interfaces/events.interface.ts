export interface Event {
  id: number;
  title: string;
  detail: string;
  img: string;
  link: string;
  type: 'EVENT' | 'CHECK';
}
