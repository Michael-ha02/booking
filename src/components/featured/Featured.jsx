import "./feature.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://fashionbible.vn/wp-content/uploads/2021/05/thanh-pho-new-york-1.jpg"
          alt="New York City"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>New york</h1>
          <h2>123 propeties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://static.onecms.io/wp-content/uploads/sites/28/2021/02/23/boston-massachusetts-BOSTONTG0221.jpg"
          alt="Boston"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Boston</h1>
          <h2>123 propeties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="http://hanoimoi.com.vn/Uploads/images/tuandiep/2022/04/18/637849497175940145-san-frac.jpg"
          alt="San Francisco"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>San Francisco</h1>
          <h2>123 propeties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
