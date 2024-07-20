import { FC, useState } from 'react';
import styles from './explorer-component.module.css';
import {MOCKDATA} from '../../data';
import { Folder, File } from '../../types';
import {FolderHierarchy} from '../folder-hierarchy';
import {FileList} from '../file-list';

const ExplorerComponent: FC = () => {
  const [activeFolder, setActiveFolder] = useState<Folder>(MOCKDATA);
  const [selectedItem, setSelectedItem] = useState<File | Folder | null>(null);

  const handleSelectItem = (item: File | Folder) => {
    if (item.type === 'folder') {
      setActiveFolder(item);
    }
    setSelectedItem(item);
  };

  return (
    <div className={styles.explorer}>
      <div className={styles.leftPane}>
        <FolderHierarchy folder={MOCKDATA} onSelect={handleSelectItem} activeItemId={selectedItem?.id || ''} />
      </div>
      <div className={styles.rightPane}>
        <FileList folder={activeFolder} onSelect={handleSelectItem} />
        {selectedItem?.type === 'file' && (
          <div className={styles.fileContent}>
            {selectedItem.url ? <img src={selectedItem.url} alt={selectedItem.name} /> : <p>{selectedItem.content}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorerComponent;