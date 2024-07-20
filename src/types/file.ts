export default interface File {
  id: string;
  name: string;
  type: 'file';
  content: string;
  url?: string;
}