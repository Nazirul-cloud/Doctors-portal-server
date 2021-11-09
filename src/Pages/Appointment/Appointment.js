import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentHeader from './Appointment/AppointmentHeader/AppointmentHeader';
import AvailableAppointment from './Appointment/AvailableAppointment/AvailableAppointment';


const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date} ></AvailableAppointment>
        </div>
    );
    };

export default Appointment;