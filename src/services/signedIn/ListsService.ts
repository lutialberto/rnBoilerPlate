import {PaginationRequest} from '../models/PaginationRequest';
import {PaginationResponse} from '../models/PaginationResponse';

export const getInfiniteScrollData = async (
  paginationProps: PaginationRequest,
): Promise<PaginationResponse<number>> => {
  const mockedResponse: PaginationResponse<number> =
    await require('~/services/mockResponses/infinite-scroll.json');

  const totalPages = Math.floor(mockedResponse.totalItems / paginationProps.pageSize);
  return {
    ...paginationProps,
    ...mockedResponse,
    data: mockedResponse.data.slice(
      paginationProps.pageSize * paginationProps.pageNumber,
      paginationProps.pageSize * paginationProps.pageNumber + paginationProps.pageSize,
    ),
    totalPages,
    lastPage: paginationProps.pageNumber === totalPages - 1,
  };
};
