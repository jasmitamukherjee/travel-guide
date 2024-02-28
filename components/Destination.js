import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";

const Destination = () =>{
    return(
<div className="destination">
    <h1>
        Popular Destination
    </h1>
    <p>
        Tours guve you the opportuninty to see a lot,within a time frame.
    </p>
    <DestinationData
    className="first-des"
    heading ="Taal Volcano,Batangas"
    text =" 
    Taal Volcano is part of a chain of volcanoes lining the western edge of the island of Luzon. They were formed by the subduction of the Eurasian Plate underneath the Philippine Mobile Belt. Taal Lake lies within a 2530 km (1619 mi) caldera formed by explosive eruptions between 140,000 and 5,380 BP. Each of these eruptions created extensive ignimbrite deposits reaching as far away as present-day Manila.

Taal Volcano and Lake are entirely located in the province of Batangas. The northern half of Volcano Island falls under the jurisdiction of the lake shore town of Talisay, and the southern half in San Nicolas. The other communities that encircle Taal Lake include the cities of Tanauan and Lipa, and the municipalities of Talisay, Laurel, Agoncillo, Santa Teresita, San Nicolas, Alitagtag, Cuenca, Balete, and Mataasnakahoy.

Guides will guide you most of the way, and you'll see the preculiar environment found on an active volcano,including volcanic rocks and steam vents.
"
img1={Mountain1}
img2={Mountain2}
    />



<DestinationData
    className="first-des-reverse"
    heading ="Mt.Daguldul,Batangas"
    text ="
    Nestled in the heart of Batangas, the enchanting beauty of Mt. Daguldul beckons adventurers with promises of breathtaking vistas and unforgettable experiences. As you ascend this majestic peak, you'll be transported to a world where lush, emerald forests stretch as far as the eye can see, and the tranquil sounds of nature serenade your every step. Whether you're a seasoned hiker or a first-time explorer, Mt. Daguldul offers a harmonious blend of challenge and serenity. Be prepared to be captivated by the secrets this mountain keeps, from hidden waterfalls to serene campsites that offer a front-row seat to the awe-inspiring sunrise over Batangas Bay.
    
    The allure of Mt. Daguldul extends beyond its natural wonders. This iconic destination boasts a rich cultural history that's woven into the fabric of the land. As your guide leads you through the trails, you'll uncover stories of indigenous communities, folklore, and traditions that have thrived for generations. Discover the magic of Mt. Daguldul, where every step is a step closer to nature's embrace and the soul of Batangas."
img1={Mountain3}
img2={Mountain4}
    />
    
</div>

    )
}

export default Destination;