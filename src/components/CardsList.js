import React from 'react';
import Cards from './Cards';
import './CardsList.css'

// tableau de cartes
const solutions = [
    {
        title: 'Changer son équipement :',
        text: "Pour ce faire, il est nécessaire de remplacer les anciens moteurs par des équipements plus récents et plus respectueux de l’environnement. Il serait bon d’envisager l’utilisation de camions électriques ou d’opter pour des carburants moins polluants que le diesel comme l'hydrogène. La norme Euro 6 est une norme européenne qui légifère et limite les émissions de polluants par les véhicules.",
        image: "images/greenTruck.png",
        imageName: "green-truck"
    }, 
    {
        title: "Formation à l'éco-conduite :",
        text: "Dans une démarche globale de sensibilisation, les chauffeurs poids lourds sont formés et informés quant à l’éco-conduite. Cette conduite écologique permet, par des réflexes anodins, de sensiblement réduire les émissions polluantes.",
        image: "images/sterringWheel.png",
        imageName: "sterring-Wheel",
    },
    {
        title: "Eviter les transports à vide :",
        text: "Des plateformes permettant aux transporteurs de trouver du fret afin de compléter leurs chargements et aux chargeurs d’expédier des quantités moindres sans être pénalisés en termes de prix ou de délais. La condition ? Accepter de rendre ses besoins publics et donc de partager l’information",
        image: "images/mutualisation.jpg",
        imageName: "Mutualisation",
    },
    {
        title: "Le programme OBJECTIF CO2 :",
        text: "La charte d’engagements volontaires de réduction des émissions de Co2 dans le transport routier est une démarche volontaire qui s’adresse aux entreprises et vise à : améliorer la performance environnementale du transport routier, fournir aux entreprises du secteur un cadre méthodologique cohérent, fiable et reconnu nationalement, permettre aux entreprises signataires de la charte de valoriser leurs engagements en interne et en externe",
        image: "images/entreprises-transport-label-co2.jpg",
        imageName: "logo-Objectif-CO2"
    },
]

// fonction qui appelle Cards
const CardsList = () => (
    <div className="solutions-cardsList">
      {solutions.map((item, index) => (
        <Cards key={index} title={item.title} text={item.text} image={item.image} background={index%2 === 0 ? 'solutions-vertClair' : 'solutions-blanc'} imageName={item.imageName}/>
      ))}
    </div>
  );

export default CardsList