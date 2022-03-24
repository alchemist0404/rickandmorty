export const getAllCharacters =`
    query Characters(
        $page: Int
        $filter: FilterCharacter
    ) {
        characters(page: $page, filter: $filter) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                status
                name
                species
                type
                gender
                origin {
                    name
                    type
                    dimension
                }
                location {
                    name
                    type
                    dimension
                }
                image
                created
                episode {
                    id
                    name
                    air_date
                    episode
                    created
                }
            }
        }
        location(id: 1) {
            id
        }
        episodesByIds(ids: [1, 2]) {
            id
        }
    }
`;

export const getCharacter =`
    query Character(
        $id: ID!
    ) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            origin {
                name
                type
                dimension
            }
            location {
                name
                type
                dimension
            }
            image
            episode {
                id
                name
                air_date
                episode
                created
            }
            created
        }
    }
`;