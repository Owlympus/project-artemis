import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";

const Networks = () => {
  return (
    <section className={"flex flex-1 flex-col items-center gap-8 p-8"}>
      <h3 className={"justify-self-start text-xl font-bold"}>Mes réseaux :</h3>
      <ul className={"flex flex-1 flex-col self-stretch bg-[#faf8f1] p-10 -2 rounded-lg border-2 border-solid border-[#825c49] text-lg"}>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61561044167844">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </li>
        <li>
          <hr className={"my-4"}/>
        </li>
        <li>
          <a href="https://www.instagram.com/lanounoudespoilus">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </li>
        <li>
          <hr className={"my-4"}/>
        </li>
        <li>
          <a href="https://wa.me/789034152">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </li>
        <li>
          <hr className={"my-4"}/>
        </li>
        <li>
          <a href="https://g.co/kgs/rQKsaRg">
            <FontAwesomeIcon icon={faGoogle} /> Google
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Networks;
