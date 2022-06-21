import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://file4.batdongsan.com.vn/2020/09/11/JGcIp0rf/20200911212202-8407.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://worldtouristspots.com/wp-content/uploads/2022/03/Resorts.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
