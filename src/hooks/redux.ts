import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../stores";

export const useAppDispath = useDispatch.withTypes<AppDispath>();
export const useAppSelector = useSelector.withTypes<RootState>();
