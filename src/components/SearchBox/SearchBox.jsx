import { useId } from "react";

export default function SearchBox({ search, onSearch, children}) {
    const searchId = useId();

    return (
        <div>
            <label htmlFor={searchId}>{children}</label>
            <input
                type="text"
                name="search"
                id={searchId}
                value={search}
                onChange={evt => onSearch(evt.target.value)}
            />
        </div>
    )
}