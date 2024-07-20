import { Folder, File } from '../../types';
import styles from './file-list.module.css';

interface Props {
  folder: Folder;
  onSelect: (item: File | Folder) => void;
}

const FileList: React.FC<Props> = ({ folder, onSelect }) => {
  return (
    <div className={styles.fileList}>
      {folder.children.map(child => (
        <div key={child.id} onDoubleClick={() => onSelect(child)} className={styles.fileItem}>
          {child.name}
        </div>
      ))}
    </div>
  );
};

export default FileList;