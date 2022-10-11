import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Tables from './Table'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import { tasks } from './AddTask'
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { makeStyles } from '@material-ui/core/styles'
import { tempOperation } from '../App'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import AddTask from './AddTask'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "theme.palette.action.hover",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const useStyles = makeStyles(theme =>({
  
  div : {
    marginTop : theme.spacing(2),
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',

  },
  button : {
    marginTop : theme.spacing(5),
    display : 'flex',
    flexDirection : 'row-reverse',
    margin : '0.5%'

  }
}))

let vari = "";



function SimpleDialog(props) {

  const [tareas, setTareas] = useState(tasks)
    useEffect(() =>{
      let data = localStorage.getItem("array"); 
      if(data != null){
        setTareas(JSON.parse(data))
      }

    }, [])

  
  const { onClose, selectedValue2, open } = props;

  const handleClose = () => {
    onClose(selectedValue2);
    
  };

  const handleListItemClick = (value) => {
    onClose(value);
    if(value!=undefined){
      if(value=="addAccount"){
        
        window.location.href='/addTask';  
      }

    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Consultar una tarea</DialogTitle>
      <List sx={{ pt: 0 }}>
        {tareas.map((tarea) => (
          <ListItem button onClick={() => handleListItemClick(tarea.name)} key={tarea.name}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <TaskAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={tarea.name} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add task" />
        </ListItem>
      </List>

      
    </Dialog>
  );
}





export default function Home() {
  
  const [homeSelect, setHomeSelect] = useState(tasks)
    useEffect(() =>{
      let data = localStorage.getItem("array"); 
      if(data != null){
        setHomeSelect(JSON.parse(data))
      }

    }, [])

  
  let arreglo=[];

  
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  
 

  const [selectedValue, setSelectedValue] = useState("");


  const getByTask = (name) => {
    
    return homeSelect.filter( task => task.name == name);
  }


  const val = getByTask(selectedValue);
  if(val.length>0){
    arreglo = val;

  }

  
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);

    
  };

  return (
    <div className="container">
      <div className={classes.div}>
        <Typography component='h1' variant='h5'> Tasks </Typography>
        
        <br />
        
        <Tables />
      </div>
      <div className={classes.button}>
        
        <SimpleDialog
          selectedValue2={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>

      <div className={classes.div}>

        <Typography component='h1' variant='h5'> Consult task </Typography>
        
        <br />

        <Button variant="outlined" onClick={handleClickOpen}>
          Select Task
        </Button>
        <br />

      </div>

      

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Due Date</StyledTableCell>
            <StyledTableCell align="right">Asigned To</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {arreglo.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.dueDate}</StyledTableCell>
              <StyledTableCell align="right">{row.assignedTo}</StyledTableCell>
              <StyledTableCell align="right">{row.statusTask}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>     
      
    </div>
    
  );
}
