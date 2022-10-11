import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Paper, Button, TextField } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "CLS",
    label: "Close",
  },
  {
    value: "OPN",
    label: "Open",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "80vh",
    height: "150vh",
    display: "center",
    justifyContent: "center",
  },
  container: {
    opacity: "1",
    height: "60%",
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export let tasks = [
  {
    name: "Hacer el laboratorio de spti",
    description: "El laboratorio de seguridad",
    dueDate: "20/09/2022",
    assignedTo: "Natalia Orjuela",
    statusTask: "Open",
  },
  {
    name: "Terminar el laboratorio de IETI",
    description: "Usar react, se aconseja utilizar material mui",
    dueDate: "20/09/2022",
    assignedTo: "Andres Sandoval",
    statusTask: "Close",
  },
];

const AddTask = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    dueDate: "",
    assignedTo: "",
    statusTask: "",
  });

  const classes = useStyles();

  const onSubmit = (event) => {
    tasks.push({
      name: data.name,
      description: data.description,
      dueDate: data.dueDate,
      assignedTo: data.assignedTo,
      statusTask: data.statusTask,
    });

    localStorage.setItem("array", JSON.stringify(tasks));
    window.location.href = "/home";
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <Container
        component={Paper}
        elevation={10}
        maxWidth="xs"
        className={classes.container}
      >
        <div className={classes.div}>
          <Typography component="h1" variant="h5">
            {" "}
            Add Task{" "}
          </Typography>

          <br />

          <form className={classes.form}>
            <TextField
              required
              id="outlined-required"
              label="Name"
              name="name"
              onChange={handleChange}
            />

            <br />
            <br />
            <TextField
              required
              id="outlined-required"
              label="Description"
              name="description"
              onChange={handleChange}
            />

            <br />
            <br />
            <TextField
              required
              id="outlined-required"
              label="Date"
              name="dueDate"
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              required
              id="outlined-required"
              label="Assigned to"
              name="assignedTo"
              onChange={handleChange}
            />
            <br />
            <br />

            <TextField
              required
              id="outlined-required"
              label="Status"
              name="statusTask"
              onChange={handleChange}
            />

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={onSubmit}
            >
              {" "}
              Add{" "}
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default AddTask;
