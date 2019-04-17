import React from 'react';

import PropTypes from 'prop-types';

function renderItem(type, item) {
    if (!item) {
        return;
    } else {
        return <div type={type}>{item}</div>;
    }
}

export default function AddressItem(props) {
    const { person, city, street, state, zip } = props;

    return (
        <address>
            {renderItem('person', person)}
            {renderItem('street', street)}
            {renderItem('city', city)}
            {renderItem('state', state)}
            {renderItem('zip', zip)}
        </address>
    );
}

AddressItem.propTypes = {
    person: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
};
