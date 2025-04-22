import React, { useState } from 'react';
import { IonDatetime, IonItem, IonLabel } from '@ionic/react';

interface DateTimePickerProps {
  onChange: (dateTime: string) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ onChange }) => {
  const [dateTime, setDateTime] = useState<string>("");

  const handleDateTimeChange = (e: CustomEvent) => {
    setDateTime(e.detail.value);
    if (onChange) onChange(e.detail.value);
  };

  return (
    <IonItem>
      <IonLabel position="floating">Select Date and Time</IonLabel>  {/* Aquí está el texto de "placeholder" */}
      <IonDatetime
        value={dateTime}
        onIonChange={handleDateTimeChange}
        presentation="date-time"
      />
    </IonItem>
  );
};

export default DateTimePicker;



