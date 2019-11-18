import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './style';

class Main extends Component {
    state = {
        newRepo: '',
    };

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state.newRepo);
    };

    render() {
        const { newRepo } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Repositório do Github"
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton>
                        <FaPlus color="white" width={50} />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}

export default Main;
