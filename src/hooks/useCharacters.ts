import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Character, ApiResponse } from '@/types/api';

export const useCharacters = () => {
  return useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      const { data } = await axios.get<ApiResponse<Character>>(
        'https://rickandmortyapi.com/api/character'
      );
      return data.results;
    },
  });
};
