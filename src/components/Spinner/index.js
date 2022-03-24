import React from 'react'
import { Spinner as RstrapSpiner } from 'reactstrap'

export default function Spinner() {
    return (
        <div className='rick-spinner'>
            <RstrapSpiner color="warning">
                Loading...
            </RstrapSpiner>
        </div>
    )
}
