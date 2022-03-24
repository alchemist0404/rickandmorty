import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardImg, CardSubtitle } from 'reactstrap';
import useGetCharacters from '../../../api/useGetCharacters';
import Spinner from '../../../components/Spinner';

export default function CharacterList({ currentPage, query, setTotalPages }) {
    const navigate = useNavigate();
    const favorites = JSON.parse(window.localStorage.getItem('favors'));

    const { data: totalData, loading, error } = useGetCharacters({
        variables: {
            page: currentPage,
            ...(query && { filter: query })
        }
    });

    const goDetail = (item) => {
        navigate(`/character/${item.id}`);
    }

    useEffect(() => {
        if (!loading && !error) {
            setTotalPages(totalData.characters.info.pages)
        }
        if (error) {
            setTotalPages(0);
        }
    }, [totalData, loading, error, setTotalPages])
    

    if (loading && !error) {
        return (
            <Spinner />
        )
    }

    if (error) {
        return <div className='d-flex align-items-center justify-content-center text-white'><h4>There is no data.</h4></div>;
    }

    return (
        <React.Fragment>
            {
                totalData && totalData.characters.results.map((item, i) => (
                    <Card key={i} className='character-card'>
                        <div className='character-image'>
                            <CardImg
                                alt={item.name}
                                src={item.image}
                                width='100%'
                            />
                            {favorites && favorites.indexOf(item.id) >= 0 && <i className='star'></i>}
                        </div>
                        <CardBody className='character-cardbody'>
                            <div className='d-flex flex-column align-items-start'>
                                <h2 className='character-name' onClick={() => goDetail(item)}>{item.name}</h2>
                                <CardSubtitle>
                                    <div className={`status-icon ${item.status === 'Alive' ? 'alive' : item.status === 'Dead' ? 'dead' : 'unknown'}`}></div>
                                    {`${item.status} - ${item.species}`}
                                </CardSubtitle>
                            </div>
                            <div className='d-flex flex-column align-items-start'>
                                <span className='text-gray'>Last known location:</span>
                                <span className='character-location'>{item.location.name}</span>
                            </div>
                            <div className='d-flex flex-column align-items-start'>
                                <span className='text-gray'>First seen in:</span>
                                <span className='character-location'>{item.episode[0].name}</span>
                            </div>
                        </CardBody>
                    </Card>
                ))
            }
        </React.Fragment>
    )
}
