import { AppointmentConfirmed } from "./appointment/appointment-confirmed";
import { AppointmentDetails } from "./appointment/appointment-details";
import { DoctorDetails } from "./appointment/doctor-details";
import Doctors from "./appointment/doctors";

export const samplePagesConfigs = [
  {
    path: "/uhi/doctors",
    element: <Doctors />,
  },
  {
    path: "/uhi/doctor-details",
    element: <DoctorDetails />,
  },
  {
    path: "/uhi/appointment-details",
    element: <AppointmentDetails />,
  },
  {
    path: "/uhi/appointment-confirmed",
    element: <AppointmentConfirmed />,
  },
];
