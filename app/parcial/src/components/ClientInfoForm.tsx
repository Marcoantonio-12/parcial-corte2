import React, { useState } from 'react';
import { IonInput, IonLabel, IonItem, IonButton, IonTextarea } from '@ionic/react';

interface ClientInfo {
  name: string;
  contact: string;
  comments: string;
}

interface ClientInfoFormProps {
  onSubmit: (clientInfo: ClientInfo) => void;
}

const ClientInfoForm: React.FC<ClientInfoFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  const handleSubmit = () => {
    const clientData: ClientInfo = { name, contact, comments };
    if (onSubmit) onSubmit(clientData);
  };

  return (
    <div>
      <IonItem>
        <IonLabel>Name</IonLabel>
        <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel>Contact</IonLabel>
        <IonInput value={contact} onIonChange={e => setContact(e.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel>Comments</IonLabel>
        <IonTextarea value={comments} onIonChange={e => setComments(e.detail.value!)} />
      </IonItem>
      <IonButton onClick={handleSubmit}>Submit</IonButton>
    </div>
  );
};

export default ClientInfoForm;
