import { FC, useState, useCallback } from 'react';
import styles from './folder-hierarchy.module.css';
import { Folder, File } from '../../types';

interface Props {
  folder: Folder;
  onSelect: (item: File | Folder) => void;
  activeItemId: string;
  level?: number;
}

const FolderHierarchy: FC<Props> = ({ folder, onSelect, activeItemId, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const handleSelect = useCallback(
    (item: File | Folder) => {
      onSelect(item);
    },
    [onSelect]
  );

  return (
    <div className={`${styles.folder} ${styles[`level${level}`]}`}>
      <div onClick={() => { handleToggle(); handleSelect(folder); }} className={folder.id === activeItemId ? styles.active : ''}>
        {expanded ? '📂' : '📁'} {folder.name}
      </div>
      {expanded && (
        <div className={styles.children}>
          {folder.children.map(child => (
            <div key={child.id} className={styles.child}>
              {child.type === 'folder' ? (
                <FolderHierarchy folder={child as Folder} onSelect={onSelect} activeItemId={activeItemId} level={level + 1} />
              ) : (
                <div onClick={() => handleSelect(child)} className={child.id === activeItemId ? styles.active : ''}>
                  {child.url ? '🖼️' : '📄'} {child.name}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderHierarchy;