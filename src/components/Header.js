import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchKey]) {
        setSearchSuggestion(searchCache[searchKey]);
      } else {
        searchApiCall();
      }
    }, 2000);

    // destroy timer
    return () => {
      clearTimeout(timer);
    };
  }, [searchKey]);

  const searchApiCall = async () => {
    const apiCallSearch = await fetch(YOUTUBE_SEARCH_API + searchKey);

    const dataJson = await apiCallSearch.json();

    setSearchSuggestion(dataJson[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchKey]: dataJson[1],
      })
    );
  };

  //console.log(searchSuggestion[1]);

  const toggleMenuHandlar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col items-center justify-between shadow-lg px-8">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandlar()}
          className="h-4"
          alt="Menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsO7o0gXJSP3CTBgp7NMouWD1CztLP8vAHl26PROjSDw&s"
        />
        <img
          className="h-14"
          alt="youtube"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        />
      </div>
      <div className="col-span-10 ">
        <div className="relative">
          <div>
            <input
              type="text"
              //value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              className="border-solid border border-gray-400 h-8 w-1/2 rounded-l-full px-2"
            />
            <button
              type="button"
              className="bg-gray-300 rounded-r-full h-8 px-4"
            >
              Search
            </button>
          </div>
          {showSuggestion && (
            <div className="absolute bg-white py-2 px-2 w-1/3 shadow-md rounded-md">
              <ul className="">
                {searchSuggestion.map((item) => {
                  return (
                    <li key={item} className="hover:bg-gray-100 px-4">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-6"
          alt="User"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
    </div>
  );
};
export default Header;
