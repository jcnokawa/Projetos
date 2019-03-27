import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Cadastro.css';
import { Form, Container, Col, Button } from 'react-bootstrap';

class Cadastro extends Component {
	constructor(args) {
		super(args);
		this.state = {
			firstName: '',
			lastName: '',
			gender: '',
			country: '',
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

	chamaLogin = () => {
		this.setState({
			redirect: true
		});
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/login" />;
		} else {
			return (
					<h1>Cadastro</h1>
						<Container>
							<Form.Row>
							<div class="form">
								
									
									<div className="col-lg-6">
									<Col lg={6}>
										<Form.Group as={Col} controlId="firstName">
											<Form.Label htmlFor="firstName"> Nome </Form.Label>
											<Form.Control
												value={this.state.firstName}
												onChange={this.onChange.bind(this)}
												name="firstName"
												id="firstName"
												type="text"										
											/>
										</Form.Group>									
									</Col>	
									</div>	
												
									<div className="col-lg-6">
										<Col lg={6}>
											<Form.Group as={Col} controlId="lastName">
												<Form.Label htmlFor="lastName"> Sobrenome </Form.Label>
												<Form.Control
													value={this.state.lastName}
													onChange={this.onChange.bind(this)}
													name="lastName"
													id="lastName"
													type="text"
												/>
											</Form.Group>
										</Col>
										</div>
							
							

								
									<div className="col-lg-6">
										<Col lg={6}>
											<Form.Group as={Col} controlId="gender">
												<Form.Label htmlFor="gender">Gênero</Form.Label>
												<Form.Control
													as="select"
													id="gender"
													name="gender"
													value={this.state.gender}
													onChange={this.onChange.bind(this)}>
													<option value="">Selecione</option>
													<option value="M">Masculino</option>
													<option value="W">Feminino</option>
												</Form.Control>
											</Form.Group>
										</Col>
									</div>
								
								

									<div className="col-lg-6">
										<Col lg={6}>
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
										</Col>										
									</div>

								
									<div className="col-lg-6">
										<Col lg={6}>
											<Form.Group as={Col} controlId="password">
												<Form.Label htmlFor="email"> Senha </Form.Label>
												<Form.Control
													value={this.state.password}
													onChange={this.onChange.bind(this)}
													name="password"
													id="password"
													type="password"
												/>
											</Form.Group>
										</Col>
									</div>


									<div className="btnCad">
										<Col>
											<Button type="submit" onClick={() => this.chamaLogin()}>
												{' '}
												Cadastrar{' '}
											</Button>
										</Col>
									</div>
									</div>
						</Form.Row>	
					</Container>
			);
		}
	}
}
export default Cadastro;
