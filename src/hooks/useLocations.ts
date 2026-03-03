import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Location, ApiResponse } from '@/types/api';

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      const { data } = await axios.get<ApiResponse<Location>>(
        'https://rickandmortyapi.com/api/location'
      );
      return data.results;
    },
  });
};
