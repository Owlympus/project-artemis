import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faLocationDot, faPaw} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section className={"flex flex-1 flex-col items-center gap-8 p-8"}>
      <h3 className={"justify-self-start text-xl font-bold"}>Accueil</h3>
      <div className={"flex flex-1 flex-col gap-4 self-stretch bg-[#faf8f1] p-6 rounded-lg border-2 border-solid border-[#825c49] text-lg"}>
        <img src="/src/assets/logo.jpg" alt="La Nounou des Poilus" className={"rounded"}/>
        <article className={"flex flex-col text-md text-neutral-600 gap-4"}>
          <hr className={"mx-16"}/>
          <div className={"flex flex-col gap-2"}>
            <span><FontAwesomeIcon icon={faPaw} /> La nounou des poilus propose des services de pet-sitting dédiés aux chiens, chats et NAC.</span>
            <span><FontAwesomeIcon icon={faHouse} /> Visites à domicile, promenades, les prestations sont conçues pour s’adapter aux besoins de chaque animal.</span>
            <span><FontAwesomeIcon icon={faLocationDot} /> Installée à Thorens-Glières (74) j’interviens dans un rayon de 30 min autour de la commune.</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Home;
