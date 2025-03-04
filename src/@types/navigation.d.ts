import {AppStackParamList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
