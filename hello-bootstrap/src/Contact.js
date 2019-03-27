import React, { Component } from 'react';
import './Contact.css';
import { Form, Container, Button, Col } from 'react-bootstrap';

class Contact extends Component {
	constructor(args) {
		super(args);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			message: ''
		};
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	save(e) {
		this.setState({
			message: 'Enviado com sucesso'
		});
	}

	render() {
		return (
			<div className="lastForm">
					<div className="formMessage">
					<Form>
						<h1>Fale Conosco</h1>
						<Container>
							<Form.Row>
							<div className="firstName">
								<Col>
								<div className="col-md-12">
									<Form.Group  as={Col} controlId="firstName">
										<Form.Label htmlFor="firstName"> Nome </Form.Label>
										<Form.Control
											value={this.state.firstName}
											onChange={this.onChange.bind(this)}
											name="firstName"
											id="firstName"
											type="text"
										/>
									</Form.Group>
								</div>
								</Col>
							</div>

								<div className="lastName">
								<Col>
								<div className="col-md-12">
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
									</div>
									</Col>									
								</div>

								<div className="email">
								<Col>
								<div className="col-md-12">
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
								</div>

								<div className="message">
								<Col>
								<div className="col-md-12">
									<Form.Group as={Col} controlId="message">
										<Form.Label htmlFor="message">Deixe sua mensagem </Form.Label>
										<Form.Control
											as="textarea"
											rows="5"
											id="message"
											name="message"
											value={this.state.message}
											onChange={this.onChange.bind(this)}
										/>
									</Form.Group>
									</div>
									</Col>
								</div>
								<br />

								<div className="btnMessage">
									<Button type="submit" onClick={this.save.bind(this)}>
										{' '}
										Enviar{' '}
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

export default Contact;
