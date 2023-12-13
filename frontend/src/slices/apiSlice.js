import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

import { logout } from './authSlice'; // Import the logout action

// NOTE: code here has changed to handle when our JWT and Cookie expire.
// We need to customize the baseQuery to be able to intercept any 401 responses
// and log the user out
// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-queries-with-basequery

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

async function baseQueryWithAuth(args, api, extra) {
  try {
    const result = await baseQuery(args, api, extra);
    return result;
  } catch (error) {
    console.error('Error in baseQueryWithAuth:', error);
    if (error.status === 401) {
      api.dispatch(logout());
    }
    throw error; // Rethrow the error to propagate it further
  }
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth, // Use the customized baseQuery
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});
