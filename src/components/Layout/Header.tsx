import {Link, NavLink} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faHome, faPaw} from "@fortawesome/free-solid-svg-icons";
import {cn} from "../../utils/cn";

const Header = () => (
  <header className={"sticky bg-white top-4 p-1 border border-solid border-gray-200 rounded-lg shadow-lg"}>
    <nav>
      <ul className={"flex items-center justify-around"}>
        <li>
          <NavLink
            viewTransition
            to={"/"}
            className={"relative flex flex-col items-center justify-center text-neutral-600"}>
            {({isActive}) => (
              <>
                <FontAwesomeIcon icon={faHome} className={"text-neutral-500"} />
                Accueil
                {isActive && <FontAwesomeIcon icon={faPaw} className={cn("absolute -bottom-2 -left-4 -rotate-45 text-neutral-500")} />}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <img src="/src/assets/logo.jpg" alt="La Nounou des Poilus logo" className={"h-20 w-20 object-cover rounded-full"}/>
        </li>
        <li>
          <NavLink
            viewTransition
            to={"/networks"}
            className={"relative flex flex-col items-center justify-center text-neutral-600"}>
            {({isActive}) => (
              <>
                <FontAwesomeIcon icon={faAt} className={"text-neutral-500"} />
                Réseaux
                {isActive && <FontAwesomeIcon icon={faPaw} className={cn("absolute -bottom-2 -left-4 -rotate-45 text-neutral-500")} />}
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;
