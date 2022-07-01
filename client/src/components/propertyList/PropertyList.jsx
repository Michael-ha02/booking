import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North",
    "https://file4.batdongsan.com.vn/2020/09/11/JGcIp0rf/20200911212202-8407.jpg",
    "https://worldtouristspots.com/wp-content/uploads/2022/03/Resorts.jpg",
    "https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
/*
const images = [
  "https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North",
  "https://file4.batdongsan.com.vn/2020/09/11/JGcIp0rf/20200911212202-8407.jpg",
  "https://worldtouristspots.com/wp-content/uploads/2022/03/Resorts.jpg",
  "https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
];
*/
