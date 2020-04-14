import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import './buttonEdit.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));



export default function ButtonEdit({ person, deletePeople, editName, editNumber, editEmail }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const {id, name, email, avatar, number} = person;
  
  const changeName = (e) => {
    let valueName = e.target.value;
    
    editName(id, valueName);
  }

  const changeNumber = (e) => {
    let valueNumber = e.target.value;
    
    editNumber(id, valueNumber);
  }

  const changeEmail = (e) => {
    let valueEmail = e.target.value;
    
    editEmail(id, valueEmail);
  }

  return (
    <div>
      <Button type="button" onClick={handleOpen} variant="contained" color="primary">
      Изменить
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">{name}</h2>
            <div className="blockModal">
              <div className="avatarModal">
                <img src={avatar} alt="" width="150" />
              </div>

              <div>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountBoxIcon />
                    </Grid>
                    <Grid item>
                      <TextField id="input-with-icon-grid" label={name} onChange={changeName} />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <PhoneAndroidIcon />
                    </Grid>
                    <Grid item>
                      <TextField id="input-with-icon-grid" label={number} onChange={changeNumber} />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <EmailIcon />
                    </Grid>
                    <Grid item>
                      <TextField id="input-with-icon-grid" label={email} onChange={changeEmail} />
                    </Grid>
                  </Grid>
                </div>
              </div>

            </div>
            <div className="btn-edit">
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CancelPresentationIcon />}              
                onClick={handleClose}
              >
                Отмена
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => deletePeople(id)}
              >
                Удалить
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={handleClose}
              >
                Сохранить
              </Button>
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}