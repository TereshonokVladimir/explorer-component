import { FC, useState, useCallback } from 'react';
import styles from './explorer-component.module.css';
import { Folder, File } from '../../types';
import { FolderHierarchy } from '../folder-hierarchy';
import { FileList } from '../file-list';
import { MOCK_DATA } from '../../data';

const ExplorerComponent: FC = () => {
  const [activeFolder, setActiveFolder] = useState<Folder>(MOCK_DATA);
  const [selectedItem, setSelectedItem] = useState<File | Folder | null>(null);

  const handleSelectItem = useCallback((item: File | Folder) => {
    if (item.type === 'folder') {
      setActiveFolder(item);
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  }, []);

  return (
    <div className={styles.explorer}>
      <div className={styles.leftPane}>
        <h2>Folder Hierarchy</h2>
        <FolderHierarchy folder={MOCK_DATA} onSelect={handleSelectItem} activeItemId={selectedItem?.id || ''} />
      </div>
      <div className={styles.rightPane}>
        <h2>File List</h2>
        <FileList folder={activeFolder} onSelect={handleSelectItem} />
        {selectedItem && selectedItem.type === 'file' && (
          <div className={styles.fileContent}>
            <h3>Details</h3>
            {selectedItem.url ? (
              <div>
                <img src={selectedItem.url} alt={selectedItem.name} className={styles.fileImage} />
              </div>
            ) : (
              <div>
                <p>📄 {selectedItem.name}</p>
                <p>{selectedItem.content}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorerComponent;