import React, { useState } from 'react'
import { Button, Col, Input, Row } from 'reactstrap'

export default function Filter({ onSearch }) {
    const [filterQuery, setFilterQuery] = useState({
        name: '',
        status: '',
        gender: ''
    })

    const search = () => {
        onSearch(filterQuery);
    }

    return (
        <Row className='w-100'>
            <Col md sm className='d-flex align-items-center justify-content-end my-1'><span className='text-white'>Filter:</span></Col>
            <Col md sm className='my-1'>
                <Input placeholder='By Name' value={filterQuery.name} onChange={(e) => setFilterQuery({ ...filterQuery, name: e.target.value })} />
            </Col>
            <Col md sm className='my-1'>
                <Input placeholder='By Status' value={filterQuery.status} onChange={(e) => setFilterQuery({ ...filterQuery, status: e.target.value })} />
            </Col>
            <Col md sm className='my-1'>
                <Input placeholder='By Gender' value={filterQuery.gender} onChange={(e) => setFilterQuery({ ...filterQuery, gender: e.target.value })} />
            </Col>
            <Col md sm className='d-flex justify-content-center my-1' onClick={search}>
                <Button color='warning'>Search</Button>
            </Col>
        </Row>
    )
}
