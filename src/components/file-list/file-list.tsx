import { FC, useCallback } from 'react';
import { Folder, File } from '../../types';
import styles from './file-list.module.css';

interface Props {
  folder: Folder;
  onSelect: (item: File | Folder) => void;
}

const FileList: FC<Props> = ({ folder, onSelect }) => {
  const handleSelect = useCallback(
    (item: File | Folder) => {
      onSelect(item);
    },
    [onSelect]
  );

  return (
    <div className={styles.fileList}>
      {folder.children.map(child => (
        <div key={child.id} onClick={() => handleSelect(child)} className={styles.fileItem}>
          {child.type === 'folder' ? '📁' : child.url ? '🖼️' : '📄'} {child.name}
        </div>
      ))}
    </div>
  );
};

export default FileList;