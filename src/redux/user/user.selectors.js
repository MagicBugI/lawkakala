import {createSelector} from 'reselect';

const user = state => state.user.currentUser;

export const selectUser = createSelector(
    user,
    user => user
);

