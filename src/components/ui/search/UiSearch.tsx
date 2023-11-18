import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import style from "./Search.module.scss";

const UiSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const onSearch: React.MouseEventHandler<HTMLInputElement> = () => {
    console.log(searchValue);
  };

  return (
    <div className={style.search}>
      <input
        value={searchValue}
        type="text"
        placeholder="search"
        className={style.input}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <span className={style.icon} onClick={onSearch}>
        <BiSearchAlt2 />
      </span>
    </div>
  );
};
export { UiSearch };
