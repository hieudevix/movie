import React, { createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import { getListFilm } from '../redux/actions/ListMovieActions';

export const AppContext = createContext();
export default function AppProvider({ children }) {
    const { listFilmShowing } = useSelector(state => state.ListMovieReducer);
    const { cinemaCodeList, listCinemasDetail, cinemaDetailChoose } = useSelector(state => state.ListCinemasReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListFilm());
    }, []);
    return (
        <AppContext.Provider value={{ listFilmShowing, cinemaCodeList, listCinemasDetail }}>
            {listFilmShowing ? cinemaCodeList ? listCinemasDetail ? children : <Loader /> : <Loader /> : <Loader />}
        </AppContext.Provider>
    )
}
