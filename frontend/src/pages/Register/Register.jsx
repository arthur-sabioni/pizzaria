import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

const Register = () => {
  const { container, title, form, field, button } = useStyles();

  return (
    <div className={container}>
      <div className={title}>Cadastro</div>
      <div className={form}>
        <TextField className={field} id="text-field-name" variant="outlined" label="Nome" />
        <TextField className={field} id="text-field-cpf" variant="outlined" label="CPF" />
        <TextField className={field} id="text-field-email" variant="outlined" label="E-mail" />
        <TextField className={field} id="text-field-telephone" variant="outlined" label="Telefone" />
      </div>
      <div className={button}>
        <Button variant="contained">Cadastrar</Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    padding: 32,
  },
  title: {
    fontSize: 32,
    textAlign: 'left',
    marginBottom: 24,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginBottom: 16,
  },
  button: {
    display: 'flex',
    justifyContent: 'right',
  }
})

export default Register;
