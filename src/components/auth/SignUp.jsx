import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";

const SignUp = () => {
    const { register, errors, handleSubmit, setValue } = useForm();

    useEffect(() => {
        register({ name: "username"}, { required: true });
        register({ name: "email"}, { required: true });
        register({ name: "password"}, { required: true, minLength: 6 });
    }, []);

    const onSubmit = (data, e) => {
        console.log(data);
    }

    return (
        <Grid textAlign="center" verticalAlign="middle" className={styles.container}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <h1 className={styles.formHeader}>Chatify
                <span>.io</span>
                </h1>

                <Form size="large" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Segment>
                        <Form.Input fluid icon="user" iconPosition="left" name="username" placeholder="Kullanıcı Adı" type="text" onChange= {(event, { name, value }) => {
                            setValue(name, value);
                        }}
                        error={errors.username ? true : false}
                        />
                        <Form.Input fluid icon="mail" iconPosition="left" name="email" placeholder="Email" type="email" onChange= {(event, { name, value }) => {
                            setValue(name, value);
                        }}
                        error={errors.email ? true : false}
                        />
                        <Form.Input fluid icon="lock" iconPosition="left" name="password" placeholder="Parola" type="password" onChange= {(event, { name, value }) => {
                            setValue(name, value);
                        }}
                        error={errors.password ? true : false}
                        />

                        <Button color="purple" fluid size="large"> Kaydol </Button>
                    </Segment>
                </Form>

                <Message>
                    Zaten bir hesabın var mı? <Link to="/login">Giriş Yap</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default SignUp;
