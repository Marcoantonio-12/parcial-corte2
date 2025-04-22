import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { useState } from 'react';

const ClienteInfoForm: React.FC = () => {
  const [telefono, setTelefono] = useState('');

  const handleTelefonoChange = (e: CustomEvent) => {
    const value = e.detail.value;
    // Solo números (elimina letras y símbolos)
    const soloNumeros = value.replace(/\D/g, '');
    setTelefono(soloNumeros);
  };

  return (
    <>
      <IonItem>
        <IonLabel position="floating">Nombre</IonLabel>
        <IonInput type="text" />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Apellido</IonLabel>
        <IonInput type="text" />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Correo</IonLabel>
        <IonInput type="email" />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Teléfono</IonLabel>
        <IonInput
          type="text"
          value={telefono}
          onIonInput={handleTelefonoChange}
          inputmode="numeric"
          pattern="[0-9]*"
        />
      </IonItem>
    </>
  );
};

export default ClienteInfoForm;
