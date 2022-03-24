import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getCharacter as CHARACTER } from '../graphql/queries';

export const useGetCharacter = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(CHARACTER),
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

export default useGetCharacter;
