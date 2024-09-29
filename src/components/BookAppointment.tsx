import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"];

interface Appointment {
  name: string;
  doctor: string;
  date: string;
  time: string; // Change this to string
}

const BookAppointment: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    doctor: "",
    date: "",
    time: dayjs(),
  });

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Load appointments from localStorage when the component mounts
  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      const parsedAppointments: Appointment[] = JSON.parse(
        storedAppointments
      ).map((appointment: Appointment) => ({
        ...appointment,
        time: dayjs(appointment.time), // Convert time back to Dayjs
      }));
      setAppointments(parsedAppointments);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTimeChange = (newTime: Dayjs | null) => {
    if (newTime) {
      setForm({ ...form, time: newTime });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAppointment: Appointment = {
      name: form.name,
      doctor: form.doctor,
      date: form.date,
      time: form.time.format(), // Save as ISO string
    };

    // Update the appointments list
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);

    // Save the updated appointments list to localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    console.log("Appointment Details:", newAppointment);

    // Clear the form after submission
    setForm({
      name: "",
      doctor: "",
      date: "",
      time: dayjs(),
    });
  };

  return (
    <Container
      sx={{
        marginTop: 8,
        height: "calc(100vh - 64px)", // Adjust based on your navbar height
        overflowY: "auto", // Allow vertical scrolling
      }}
    >
      <Typography variant="h4" gutterBottom>
        Book an Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          select
          label="Select Doctor"
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          margin="normal"
          required
        >
          {doctors.map((doctor) => (
            <MenuItem key={doctor} value={doctor}>
              {doctor}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          type="date"
          label="Select Date"
          name="date"
          InputLabelProps={{ shrink: true }}
          value={form.date}
          onChange={handleChange}
          margin="normal"
          required
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Select Time"
            value={form.time}
            onChange={handleTimeChange}
            slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>

      {/* Display upcoming appointments */}
      <Box sx={{ marginTop: 3, mb: 1 }}>
        <Typography variant="h5" gutterBottom>
          Upcoming Appointments
        </Typography>
        {appointments.length > 0 ? (
          <List>
            {appointments.map((appointment, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Appointment with ${appointment.doctor}`}
                  secondary={`Date: ${appointment.date}, Time: ${dayjs(
                    appointment.time
                  ).format("HH:mm")}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No upcoming appointments</Typography>
        )}
      </Box>
    </Container>
  );
};

export default BookAppointment;
