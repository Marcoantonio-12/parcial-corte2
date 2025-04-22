import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import DateTimePicker from '../components/DateTimePicker';
import ClienteInfoForm from '../components/ClienteInfoForm';
import TableSelector from '../components/TableSelector';

function Home() {
  const handleDateChange = (date: string) => {
    console.log('Reserva para:', date);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reserva</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reserva</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <DateTimePicker onChange={handleDateChange} />
          <ClienteInfoForm />
          <TableSelector />
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Home;
