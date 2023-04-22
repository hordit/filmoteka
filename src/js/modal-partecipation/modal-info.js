import { refs } from "../refs";
import { Notify } from "notiflix";

refs.team.addEventListener('click', () => {
    Notify.success('Тут скоро будет модалка');
  });