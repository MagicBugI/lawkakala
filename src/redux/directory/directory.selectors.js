import { createSelector} from 'reselect';

const directory = state => state.directory;

export const selectDirectoryMenu = createSelector(
    directory , 
    directory => directory
);