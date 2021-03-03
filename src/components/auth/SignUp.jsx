import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react';
import styles from "./signup.module.css";

const SignUp = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <Grid textAlign="center" verticalAlign="middle" className={styles.container}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <h1 className={styles.formHeader}>Chatify
                <span><div className="io"></div></span>
                </h1>

                <Form size="large" className={styles.form} onSubmit={handleSubmit}>
                    <Segment>
                        <Form.Input fluid icon="user" iconPosition="left" name="username" placeholder="Kullanıcı Adı" type="text" />
                        <Form.Input fluid icon="mail" iconPosition="left" name="email" placeholder="Email" type="email" />
                        <Form.Input fluid icon="lock" iconPosition="left" name="password" placeholder="Parola" type="password" />

                        <Button color="purple" fluid size="large"> Giriş Yap </Button>
                    </Segment>
                </Form>

                <Message>
                    Yeni misin? <Link to="/signup">Hesap Oluştur</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default SignUp;
