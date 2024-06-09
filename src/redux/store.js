import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Імпортуйте свої редюсери
import authReducer from './auth/authSlice';
// import { themeSlice } from './themeSlice';
// import { activeBoardIdSlice } from './activeBoardSlice';
// import sidebarReducer from './sidebarSlice';
// import { boardsApi } from './boardsSlice';
// import { columnsApi } from './columnsSlice';
// import { todosApi } from './cardsSlice';
// import { filterReducer } from './filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const rootPersistConfig = {
  key: 'root',
  storage,
  // Тимчасово закоментуємо чорний список редюсерів, які зараз не використовуються
  // blacklist: [
  //   boardsApi.reducerPath,
  //   columnsApi.reducerPath,
  //   todosApi.reducerPath,
  // ],
};

const rootReducer = combineReducers({
  // theme: themeSlice.reducer,
  // sidebar: sidebarReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  // filter: filterReducer,
  // activeBoardId: activeBoardIdSlice.reducer,
  // [boardsApi.reducerPath]: boardsApi.reducer,
  // [columnsApi.reducerPath]: columnsApi.reducer,
  // [todosApi.reducerPath]: todosApi.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(
  //   boardsApi.middleware,
  //   columnsApi.middleware,
  //   todosApi.middleware
  // ),
});

export const persistor = persistStore(store);
