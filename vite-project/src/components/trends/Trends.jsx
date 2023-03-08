import TrendItem from "../TrendItem";
import "./index.css";

const Trends = () => {
  const newTrends = [
    {
      title: "Vittoria in Rimonta!",
      subTitle: "cavs contro celtics",
      body: "Non tutti lo credevano possibile ma i cavs hanno dato una grande prova di forza, vincendo in rimonta in casa contro i favoriti Celtics ",
    },
    {
      title: "Post Roma-Juve",
      subTitle: "Polemiche per il rosso a Ken",
      body: "Vedere gente che ha osannato criminali come Nedved e Iuliano, fare la morale a Mancini lascia tutti confusi",
    },
    {
      title: "Bobo Tv",
      subTitle: "Ancora polimiche e accuse di Cassano",
      body: "Il barese nuovamente all'attacco ma nessuno riesce a capire cosa dice quindi non sappiamo il bersaglio delle accuse ne ,le accuse stesse",
    },
    {
      title: "La Terra è salva!",
      subTitle: "Vittoria del terrestre Rick Sanchez",
      body: "Vittoria di Rick e Morty nella gara interdimensionale di canto, come promesso la terra è ora salva,il nonno cantante è poi sparito con la Gioconda.",
    },
    {
      title: "Crisi Energetica",
      subTitle: "Possibile soluzione eco-friendly",
      body: "Filtra ottimismo dall'università di Bari, i test del nuovo generatore di energia,alimentato dalle cazzate dei politici italiani,sembra promettere bene.",
    },
  ];

  return (
    <div className="trends">
      <h1>I nuovi Splash del momento</h1>
      {newTrends.map((item, index) => (
        <TrendItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Trends;
