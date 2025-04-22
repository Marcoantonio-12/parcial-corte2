import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

const TableSelector: React.FC = () => {
  return (
    <IonItem>
      <IonLabel>Mesa</IonLabel>
      <IonSelect placeholder="Selecciona una mesa">
        <IonSelectOption value="Mesa 1">Mesa 1</IonSelectOption>
        <IonSelectOption value="Mesa 2">Mesa 2</IonSelectOption>
        <IonSelectOption value="Mesa 3">Mesa 3</IonSelectOption>
        <IonSelectOption value="Mesa 4">Mesa 4</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default TableSelector;
