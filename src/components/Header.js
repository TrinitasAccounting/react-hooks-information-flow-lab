// import { onDarkModeClick } from './App';

function Header({ onDarkModeClick, colorMode }) {
    return (
        <>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {colorMode ? "Dark" : "Light"} Mode
            </button>
        </>
    )
};


export default Header;