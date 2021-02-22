import React from "react";
import Cards from "./Cards";
import "./CardsList.css";

// tableau de cartes
const solutions = [
  {
    title: "Changer son équipement :",
    text:
      "Pour ce faire, il est nécessaire de remplacer les anciens vehicules par des équipements plus récents et plus respectueux de l’environnement. La norme Euro 6 est une norme européenne qui légifère et limite les émissions de polluants par les véhicules.",
    image: "images/greenTruck.png",
    imageName: "green-truck",
    value: "innovations",
  },
  {
    title: "Formation à l'éco-conduite :",
    text:
      "Dans une démarche globale de sensibilisation, les chauffeurs poids lourds sont formés et informés quant à l’éco-conduite. Cette conduite écologique permet, par des réflexes anodins, de sensiblement réduire les émissions polluantes.",
    image: "images/sterringWheel.png",
    imageName: "sterring-Wheel",
    value: "programmes",
  },
  {
    title: "Eviter les transports à vide :",
    text:
      "Des plateformes permettant aux transporteurs de trouver du fret afin de compléter leurs chargements et aux chargeurs d’expédier des quantités moindres sans être pénalisés en termes de prix ou de délais. La condition ? Accepter de rendre ses besoins publics et donc de partager l’information.",
    image: "images/mutualisation.jpg",
    imageName: "Mutualisation",
    value: "logistics",
  },
  {
    title: "L'utilisation du biogaz :",
    text:
      "les camions roulant au gaz naturel ont une autonomie acceptable de 500 km avec du gaz naturel comprimé (GNC) à 1 200 km avec du gaz naturel liquéfié (GNL) à double réservoir. En France, des stations sont de plus en plus créées pour répondre à la demande grandissante.",
    image: "images/petrol-station.png",
    imageName: "gazNaturel",
    value: "innovations",
  },
  {
    title: "Le deploiement de l'électrique :",
    text:
      "Plusieurs constructeurs planchent depuis un certain temps sur des poids-lourds électriques avec une autonomie pouvant atteindre 800 km. Des bornes de recharges sont en déploiement dans toute l’Europe.",
    image: "images/electric-station.png",
    imageName: "electrique",
    value: "innovations",
  },
  {
    title: "Le programme OBJECTIF CO2 :",
    text:
      "La charte d’engagements volontaires de réduction des émissions de Co2 dans le transport routier est une démarche volontaire qui s’adresse aux entreprises et vise à : améliorer la performance environnementale du transport routier, fournir aux entreprises du secteur un cadre méthodologique cohérent, fiable et reconnu nationalement, permettre aux entreprises signataires de la charte de valoriser leurs engagements en interne et en externe",
    image: "images/entreprises-transport-label-co2.jpg",
    imageName: "logo-Objectif-CO2",
    value: "programmes",
  },
  {
    title: "Le transport ferroviaire :",
    text:
      "Le fret par rail émet neuf fois moins de CO2 que sa version routière, et consomme six fois moins d’énergie. Il permet un gain de temps car il n’y a pas d’embouteillages et les horaires sont fixes. De plus, les marchandises transportées sont groupées et ne sont pas dispatchées entre plusieurs camions. Le seul frein à son développement est les tarifs élevés pratiqués par la SNCF.",
    image: "images/train.png",
    imageName: "train",
    value: "types",
  },
  {
    title: "Le transport fluvial :",
    text:
      "Les voies fluviales sont nombreuses en France, elles sont des atouts écologiques à ne pas négliger. Le transport des marchandises est effectué par des péniches, d'un tonnage inférieur à 400 tonnes, l'équivalent de 10 camions de 35 tonnes. Les livraisons par voie fluviale respectent les délais, même au cœur des agglomérations. De plus, c'est une solution moins coûteuse.",
    image: "images/ship.png",
    imageName: "boat",
    value: "types",
  },
  {
    title: "La logistique mutualisée :",
    text:
      "Il s'agit de la combinaison de plusieurs types de livraisons et de parcours de marchandises, dont les points d’enlèvement et de distribution varient en fonction de la disponibilité d’un produit, de l’emplacement géographique du consommateur final, et du délai de livraison souhaité.",
    image: "images/logistic.png",
    imageName: "logistique",
    value: "logistics",
  },
  {
    title: "Créer des hubs urbains :",
    text:
      "En ville, la création de mini-entrepôts connectés peuvent massifier la demande tout en la mutualisant.  Une grande partie des colis e-commerce pourraient être livrés de manière écologique - à vélo, vélo cargo ou à pied - et à la demande, dans un créneau horaire restreint de 30 minutes à l’aide de tournées géolocalisées de quartier.",
    image: "images/warehouse.png",
    imageName: "warehouse",
    value: "logistics",
  },
];

// fonction qui appelle Cards
class CardsList extends React.Component {
  constructor (){
    super();
  this.state = {
    value: "all",
  }
  this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    this.setState({value: event.target.value});
  }

  render(){
    console.log(this.state.value)
  return (
    <div>
      <div  className="selectSolutions">
        <select className="categoriesSolutions" value={this.state.value} onChange={this.handleClick}>
              <option value="logistics">Logistique</option>
              <option value="types">Autres transports</option>
              <option value="programmes">Programmes écologiques</option>
              <option value="innovations">Innovations</option>
              <option value="all">Toutes</option>
        </select>
      </div>
      <div className="solutions-cardsList">
        {solutions.filter((solution) => this.state.value === "all" || this.state.value === solution.value).map((item, index) => (
      <Cards
        key={index}
        id={index}
        title={item.title}
        text={item.text}
        image={item.image}
        background={index % 2 === 0 ? "solutions-vertClair" : "solutions-blanc"}
        imageName={item.imageName}
      />
    ))}
  </div>
  </div>
  )};
}

export default CardsList;
