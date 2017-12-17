import React from 'react';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import {MuiThemeProvider} from "material-ui";
import {Link} from "react-router-dom";

const SignUpForm = ({
                        onSubmit,
                        onChange,
                        errors,
                        user,
                    }) => (
        <Card className="container">
            <form action="/" onSubmit={onSubmit}>
                <h2 className="card-heading">Регистрация</h2>

                {errors.summary && <p className="error-message">{errors.summary}</p>}

                <div className="field-line">
                    <TextField
                        label="Name"
                        name="name"
                        helperText={errors.name}
                        onChange={onChange}
                        value={user.name}
                    />
                </div>

                <div className="field-line">
                    <TextField
                        label="Email"
                        name="email"
                        helperText={errors.email}
                        onChange={onChange}
                        value={user.email}
                    />
                </div>

                <div className="field-line">
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        onChange={onChange}
                        helperText={errors.password}
                        value={user.password}
                    />
                </div>


                <button className="button-line" type="submit">Зарегистрироваться</button>

                <p id={"message-register"}>Уже есть аккаунт? <Link to={'/login'}>Войти</Link>.</p>
            </form>
        </Card>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;