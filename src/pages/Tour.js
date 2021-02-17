import React from 'react';
import PropTypes from 'prop-types';

export default function Tour(tour) {
    const {tour_name} = tour;

    return (
        <div>
            <section className="tour">
            <h3>Hello from tour {tour_name}</h3>
            </section>
        </div>
    )
}

Tour.propTypes = {
    tour: PropTypes.shape({
        tour_name: PropTypes.string.isRequired,
    })
}