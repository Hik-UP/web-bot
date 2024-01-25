import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

import './Login.scss';

async function login(email: string, password: string) {
  const response = await fetch(
    'https://pro-hikup.westeurope.cloudapp.azure.com/api/auth/login',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: { email: email, password: password }
      })
    }
  );
  const data = await response.json();

  if (response.status === 200) {
    return {
      token: data.user.token,
      payload: {
        id: data.user.id,
        roles: data.user.roles
      },
      email: email
    };
  } else {
    return null;
  }
}

function LoginPage() {
  const navigate = useNavigate();
  const email = useRef<string | undefined>(undefined);
  const password = useRef<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="login-page">
      <div className="login-page__content">
        <h1 className="login-page__content__title">Connexion</h1>
        <div className="login-page__content__login-form">
          <TextField
            id="email"
            className="login-page__content__login-form__email"
            type="email"
            label="Email"
            variant="standard"
            error={error}
            helperText={error ? 'Email incorrecte' : null}
            onChange={(value) => (email.current = value.target.value)}
          />
          <TextField
            id="password"
            className="login-page__content__login-form__password"
            type="password"
            label="Mot de passe"
            variant="standard"
            error={error}
            helperText={error ? 'Mot de passe incorrect' : null}
            onChange={(value) => (password.current = value.target.value)}
          />
          <LoadingButton
            variant="contained"
            className="login-page__content__login-form__button"
            disableElevation
            loading={loading}
            sx={{
              marginTop: '20px'
            }}
            onClick={async () => {
              setError(false);

              if (
                email.current !== undefined &&
                password.current !== undefined
              ) {
                setLoading(true);
                const user = await login(email.current, password.current);

                if (user !== null) {
                  localStorage.setItem('user', JSON.stringify(user));
                  navigate('/bot', { replace: true });
                } else {
                  setLoading(false);
                  setError(true);
                }
              } else {
                setError(true);
              }
            }}
          >
            Valider
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
