import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getAllCharacters as CHARACTERS } from '../graphql/queries';

export const useGetCharacters = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(CHARACTERS),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, data, error, loading, refetch]
    );
};

export default useGetCharacters;
