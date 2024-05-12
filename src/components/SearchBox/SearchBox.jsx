import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(changeFilter(event.target.value));
    // console.log(filterName);
  };

  return (
    <label className={css.labelFilter}>
      Find contact by name
      <input
        className={css.inputFilter}
        type="text"
        value={filterName}
        onChange={handleOnChange}
      />
    </label>
  );
}
