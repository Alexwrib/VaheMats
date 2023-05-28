import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "./store";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const { dispatch } = store;
export { dispatch, useAppDispatch, useAppSelector };
