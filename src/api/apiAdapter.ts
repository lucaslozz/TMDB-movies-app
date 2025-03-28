import {MetaDataPage, Page} from '@types';

import {MetaDataPageAPI, PageAPI} from './apiTypes';

function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
  return {
    total: meta?.total_pages,
    perPage: 10,
    currentPage: meta?.page,
    lastPage: meta?.total_pages,
    firstPage: 1,
    hasNextPage: meta?.total_pages !== meta?.page,
    hasPreviousPage: meta?.page !== 1,
  };
}

function toPageModel<ApiType, ModelType>(
  page: PageAPI<ApiType>,
  adapter: (data: ApiType) => ModelType,
): Page<ModelType> {
  return {
    data: page?.results?.map(adapter),
    meta: toMetaDataPage(page),
  };
}

export const apiAdapter = {
  toMetaDataPage,
  toPageModel,
};
