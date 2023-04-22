import { useEffect, useState, useRef } from "react";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import * as searchSevices from "~/sevices/searchSevice";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { SearchIcon } from "~/components/Icons";
import { useDebounce } from "~/hooks";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchSevices.search(debounced);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();

    // request.get(
    //   'users/search', {
    //     params: {
    //       q: debounced,
    //       type: 'less'
    //     }
    //   }
    // )
    //     .then((res) => {
    //       // console.log(res.data.data);

    //       // console.log("res", res);

    //       // undefined, "", 0, false, NaN, null: ||
    //       // undefined, null: ??
    //       setSearchResult(res?.data ?? []);
    //       setLoading(false);
    //     })
    //     .catch(() => {
    //       // console.log("ffff");
    //       setLoading(false);
    //     });
  }, [debounced]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  // console.log("searchValue", searchValue);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    // <HeadlessTippy
    //   interactive
    //   visible={showResult && searchResult.length > 0}
    //   render={(attrs) => (
    //     <div className={cx("search-result")} tabIndex="-1" {...attrs}>
    //       <PopperWrapper>
    //         <h4 className={cx("search-title")}>Accounts</h4>
    //         {searchResult.map((result) => (
    //           <AccountItem key={result.id} data={result} />
    //         ))}
    //       </PopperWrapper>
    //     </div>
    //   )}
    //   onClickOutside={handleHideResult}
    // >
    //   <div className={cx("search")}>
    //     <input
    //       ref={inputRef}
    //       //gias tri de tham chieu tren htm\l
    //       value={searchValue}
    //       // value={""}
    //       placeholder="Search accounts and videos"
    //       spellCheck={false}
    //       onChange={handleChange}
    //       onFocus={() => setShowResult(true)}
    //     />
    //     {!!searchValue && !loading && (
    //       <button className={cx("clear")} onClick={handleClear}>
    //         <FontAwesomeIcon icon={faCircleXmark} />
    //       </button>
    //     )}

    //     {loading && (
    //       <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
    //     )}

    //     <button
    //       className={cx("search-btn")}
    //       onMouseDown={(e) => e.preventDefault()}
    //     >
    //       <SearchIcon />
    //     </button>
    //   </div>
    // </HeadlessTippy>
    // );

    // Using a wrapper <div> tag around the reference element solves
    // this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}
