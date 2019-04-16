import React, { Component } from 'react';
import '../styles/form.scss';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            number: '',
        };
    }

    handleChange = str => e => {
        this.setState({ [str]: e.currentTarget.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        console.info('submitting');
    };
    handlePromotionClick = e => {
        this.setState(prevState => ({ optIn: !prevState.optIn }));
    };

    prefill = e => {
        e.preventDefault();
        this.setState({
            name: 'John Doe',
            email: 'john@doe.com',
            number: '802-555-1212',
        });
    };

    clearForm = e => {
        e.preventDefault();
        this.setState({
            name: '',
            email: '',
            number: '',
        });
    };

    render() {
        return (
            <form data-testid="addUserForm" onSubmit={this.handleSubmit}>
                <input
                    data-testid="name"
                    type="text"
                    onChange={this.handleChange('name')}
                    placeholder="Name"
                    value={this.state.name}
                />
                <input
                    data-testid="email"
                    type="text"
                    onChange={this.handleChange('email')}
                    placeholder="Email"
                    value={this.state.email}
                />
                <input
                    data-testid="number"
                    type="text"
                    onChange={this.handleChange('number')}
                    placeholder="Number"
                    value={this.state.number}
                />

                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        data-testid="submitButton"
                    >
                        Submit
                    </button>
                    <button
                        data-testid="clearButton"
                        className="btn btn-link"
                        onClick={this.clearForm}
                    >
                        Clear
                    </button>
                </div>

                <div>
                    <button
                        type="button"
                        className="btn btn-link"
                        data-testid="prefillButton"
                        onClick={this.prefill}
                    >
                        Pre-fill
                    </button>
                </div>
            </form>
        );
    }
}
