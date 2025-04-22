import React, { useState } from 'react';
import { IonSelect, IonSelectOption, IonItem, IonLabel } from '@ionic/react';

interface Table {
  id: number;
  number: number;
}

interface TableSelectorProps {
  tables: Table[];
  onSelect: (tableId: number) => void;
}

const TableSelector: React.FC<TableSelectorProps> = ({ tables, onSelect }) => {
  const [selectedTable, setSelectedTable] = useState<number | undefined>(undefined);

  const handleTableSelect = (e: any) => {
    const tableId = e.detail.value;
    setSelectedTable(tableId);
    if (onSelect) onSelect(tableId);
  };

  return (
    <IonItem>
      <IonLabel>Choose a Table</IonLabel>
      <IonSelect value={selectedTable} onIonChange={handleTableSelect}>
        {tables.map((table) => (
          <IonSelectOption key={table.id} value={table.id}>
            Table {table.number}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );
};

export default TableSelector;
