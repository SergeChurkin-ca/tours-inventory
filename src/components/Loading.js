import React from 'react'
import spinner from '../images/spinner.gif'

export default function Loading() {
    return (
        <div className="loading">
            <img className="spinner" src={spinner} alt="" />
            <h4>Loading ...</h4>
        </div>
    )
}