import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
function Trip(){

    return(
        <div className="trip">
            <h1>
                Recent Trips
            </h1>
            <p>
                You can discover unique destinations using Google Maps.
            </p>
            <div className="tripcard">

                <TripData
                    image={Trip1}
                    heading = "Trip in Indonesia"
                    text ="Embarking on a trip to Indonesia is an immersion into a world of diverse wonders. From the pristine beaches of Bali to the ancient temples of Java, this archipelago nation promises a journey of contrasts. You'll savor the tantalizing flavors of Indonesian cuisine, explore lush jungles inhabited by exotic wildlife, and witness the warm hospitality of the local people. Indonesia's rich tapestry of cultures, landscapes, and adventures ensures that every moment is an opportunity to be enchanted and inspired by this Southeast Asian gem."
                />
                
                <TripData
                    image={Trip2}
                    heading = "Trip in Malayasia"
                    text ="Embarking on a trip to Malaysia is like stepping into a vibrant tapestry of cultures and landscapes. From the bustling streets of Kuala Lumpur with its iconic Petronas Twin Towers to the serene, emerald waters of Langkawi's pristine beaches, Malaysia offers a diverse and captivating adventure. Explore ancient rainforests, savor delectable street food, and immerse yourself in the warm hospitality of the local people. Whether you're drawn to the historic charms of Penang, the wildlife of Borneo, or the rich cultural heritage of Malacca, a journey through Malaysia promises an unforgettable blend of old-world charm and modern dynamism."
                />
                
                <TripData
                    image={Trip3}
                    heading = "Trip in France"
                    text ="Embarking on a trip to France is like stepping into a world of timeless charm and elegance. From the romantic streets of Paris with the Eiffel Tower's graceful silhouette in the background to the sun-kissed vineyards of Provence, France offers a kaleidoscope of experiences. Savor exquisite cuisine, wander through art-filled museums, or simply lose yourself in the enchanting beauty of picturesque villages. With a perfect blend of history, culture, and culinary delights, a trip to France promises to be a journey filled with unforgettable moments and a lifetime of memories."
                />
            </div>
        </div>


    )
}

export default Trip;