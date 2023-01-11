import { configureStore } from "@reduxjs/toolkit";
import filter_Projects from "./slices/FilterProjects";

const store = configureStore({
    reducer:{
        filter_Projects:filter_Projects
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools:false
})

export default store


