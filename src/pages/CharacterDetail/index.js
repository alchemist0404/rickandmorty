import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useGetCharacter from '../../api/useGetCharater';
import Spinner from '../../components/Spinner';
import { Button } from 'reactstrap';
import Error404 from '../Errors/404';

export default function CharacterDetail() {
	let { id: characterID } = useParams();
	const navigate = useNavigate();

	const [isFavor, setIsFavor] = useState(false);
	const favorites = JSON.parse(window.localStorage.getItem('favors'));

	const { data: characterData, loading, error } = useGetCharacter({
		variables: {
			id: characterID
		}
	});

	const toggleFavor = () => {
		let favors = [];
		if (favorites) {
			favors = favorites;
			const index = favors.indexOf(characterID);
			if (index < 0) {
				favors.push(characterID);
			} else {
				favors.splice(index, 1);
			}
		} else {
			favors.push(characterID);
		}
		window.localStorage.setItem('favors', JSON.stringify(favors));
		setIsFavor(!isFavor);
	}

	useEffect(() => {
		if (favorites && favorites.indexOf(characterID) >= 0) {
			setIsFavor(true);
		}
	}, [favorites, characterID, setIsFavor])


	if (loading && !error) {
		return (
			<Spinner />
		)
	}

	if (error) {
		return <Error404 />;
	}

	return (
		<div className='character-content'>
			<div className='character-info'>
				<div className='character-image'>
					<img src={characterData.character.image} alt='' />
					{isFavor && <i className='star'></i>}
				</div>
				<div className='character-data'>
					<h2 className='character-name'>{characterData.character.name}</h2>
					<h4 className='character-gender'>{characterData.character.gender}</h4>
					<div className='character-status mt-3'>
						<div className={`status-icon ${characterData.character.status === 'Alive' ? 'alive' : characterData.character.status === 'Dead' ? 'dead' : 'unknown'}`}></div>
						<span>{`${characterData.character.status} - ${characterData.character.species}`}</span>
					</div>
					<div className='d-flex flex-column align-items-start mt-3'>
						<span className='text-gray'>Last known location:</span>
						<span className='character-location'>{characterData.character.name}</span>
					</div>
					<div className='d-flex flex-column align-items-start mt-3'>
						<span className='text-gray'>First seen in:</span>
						<span className='character-location'>{characterData.character.episode[0].name}</span>
					</div>
				</div>
			</div>
			<div className='mt-3 d-flex align-items-center justify-content-between'>
				<Button color='warning' outline onClick={toggleFavor}>{isFavor ? `Remove from Favorite` : `Add to Favorite`}</Button>
				<Button color='warning' outline onClick={() => navigate('/')}>Back</Button>
			</div>
		</div>
	)
}
