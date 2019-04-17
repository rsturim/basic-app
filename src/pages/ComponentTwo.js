import React, { Component } from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Address from '../components/Address';

class ComponentTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Header>Address</Header>
                    <Nav item="/two" />

                    <p className="lead">
                        Lorem ipsum dolor sit amet, debitis integer integer
                        viverra, dui mauris feugiat cras facilisis.
                    </p>
                    <hr className="my-4" />
                    <p>
                        Vitaeasdasds sed mi pulvinar, pede nec quisque sed nisl
                        in, sapien nam in tincidunt amet suspendisse vel. Wisi a
                        curabitur. Cum pretium fusce fusce, faucibus etiam
                        ligula, orci pretium ut quam aliquam sociis, arcu
                        luctus. Donec vel lectus quisque vel, libero lorem ac
                        velit quisque bibendum pede, justo imperdiet nullam
                        magna, faucibus euismod dolor.
                    </p>
                    <Address
                        person="Joe Smith"
                        street="123 Cupcake lane"
                        city="Emerald City"
                        state="VT"
                        zip="05445"
                    />
                </div>
            </div>
        );
    }
}

ComponentTwo.propTypes = {};

export default ComponentTwo;
