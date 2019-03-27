import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Login.css';
import { Form, Container, Col, Button } from 'react-bootstrap';

class Login extends Component {
	constructor(args) {
		super(args);
		this.state = {
			email: '',
			password: '',
			redirect: false
		};
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
s
	chamaHome = () => {
		this.setState({
			redirect: true
		});
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		} else {
			return (
				<div className="lastForm">
					<div className="formLogin">
						<Form>
							<h1>Login</h1>
							<Container>
								<Form.Row>									
									<Col>
									<div className="col-sm-12">
										<Form.Group as={Col} controlId="email">
											<Form.Label htmlFor="email"> E-mail </Form.Label>
											<Form.Control
												value={this.state.email}
												onChange={this.onChange.bind(this)}
												name="email"
												id="email"
												type="email"
											/>
										</Form.Group>
									</div>
									</Col>
								</Form.Row>						
									<br />		
								<Form.Row>							
									<Col>									
									<div className="col-sm-12">
										<Form.Group as={Col} controlId="password">
											<Form.Label htmlFor="password"> Senha </Form.Label>
											<Form.Control
												value={this.state.password}
												onChange={this.onChange.bind(this)}
												name="password"
												id="password"
												type="password"
											/>
										</Form.Group>
									</div>
									</Col>
								</Form.Row>
								<Form.Row> 
									<div className="btnLogin">
										<Button type="submit" className="" onClick={() => this.chamaHome()}>
											{' '}
											Cadastrar{' '}
										</Button>
									</div>
								</Form.Row>
							
							</Container>
						</Form>
					</div>
				</div>				
			);
		}
	}
}

export default Login;
