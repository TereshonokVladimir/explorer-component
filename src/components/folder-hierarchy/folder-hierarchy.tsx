import { useState } from 'react';
import styles from './folder-hierarchy.module.css';
import { Folder, File } from '../../types';

interface Props {
  folder: Folder;
  onSelect: (item: File | Folder) => void;
  activeItemId: string;
}

const FolderHierarchy: React.FC<Props> = ({ folder, onSelect, activeItemId }) => {
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.folder}>
      <div onClick={handleToggle} className={folder.id === activeItemId ? styles.active : ''}>
        {expanded ? '📂' : '📁'} {folder.name}
      </div>
      {expanded && (
        <div className={styles.children}>
          {folder.children.map(child => (
            <div key={child.id} onClick={() => onSelect(child)} className={styles.child}>
              {child.type === 'folder' ? (
                <FolderHierarchy folder={child as Folder} onSelect={onSelect} activeItemId={activeItemId} />
              ) : (
                <div className={child.id === activeItemId ? styles.active : ''}>{child.name}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderHierarchy;