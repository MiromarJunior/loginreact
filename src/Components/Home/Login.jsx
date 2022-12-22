import { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Context from '../../context';
import Footer from '../Footer';
import NavBar from '../Navbar';

function Login() {

    const { setUser } = useContext(Context)
    const [error, setError] = useState(false)
    const [userForm, setUserForm] = useState({
        email: '',
        password: ''
    })

    function validateUser() {
        const uservalidate = {
            email: 'bruno@teste.com',
            password: '123'
        }
        if (userForm?.email === uservalidate?.email && userForm?.password === uservalidate?.password) {
            setUser({
                logged: true
            })
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <>
            <NavBar />
            <div className='container'>
                {error &&
                    <Alert variant={'danger'}>
                        Email or Password is invalid!
                    </Alert>
                }
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserForm({
                                ...userForm,
                                email: e.target.value
                            })
                        }} type="email" placeholder="Enter email" value={userForm.email || ''} />
                        <Form.Text className="text-muted">
                            Você irá validar com o email bruno@teste.com
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => {
                            setUserForm({
                                ...userForm,
                                password: e.target.value
                            })
                        }} value={userForm.password || ''} />
                        <Form.Text className="text-muted">
                            Você irá validar com a senha 123
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" onClick={() => {
                        validateUser()
                    }}>
                        Submit
                    </Button>
                </Form>
            </div>
            <Footer />
        </>
    );
}

export default Login;