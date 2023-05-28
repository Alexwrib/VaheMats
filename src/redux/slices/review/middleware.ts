import slice from "./slice";

import { AppDispatch } from "../../store";
import { en } from "../../../locales/en/translation";
import { dispatch } from "../../hooks";
import { ru } from "../../../locales/ru/translation";

const { setError, setReviews } = slice.actions;

const getReviews = () => (dispatch: AppDispatch) => {
  try {
    const response = [
      {
        client_1: {
          name: "Иванова Елена",
          review:
            "I really liked the quality of the product, I will order more.",
          date: "16.01.2021",
        },
      },
    ];
    dispatch(setReviews(response));
  } catch (error) {
    dispatch(setError(error));
  }
};

const handleChangeLanguage = (language: string) => () => {
  try {
    if (language === "en") {
      dispatch(setReviews(en));
    }
    if (language === "ru") {
      dispatch(setReviews(ru));
    }
  } catch (e) {
    setError(e);
  }
};

export default { getReviews, handleChangeLanguage };
