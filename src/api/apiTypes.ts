export interface MetaDataPageAPI {
  total_pages: number; // 24;
  total_results: number; // 238;
  page: number; // 1;
}

/**
 * @description Interface que define o formato de uma página de dados da API.
 * @template Data Tipo do dado da página.
 */
export interface PageAPI<Data> extends MetaDataPageAPI {
  results: Data[];
}
