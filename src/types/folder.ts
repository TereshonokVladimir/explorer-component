import File from './file';

export default interface Folder {
  id: string;
  name: string;
  type: 'folder';
  children: (File | Folder)[];
}