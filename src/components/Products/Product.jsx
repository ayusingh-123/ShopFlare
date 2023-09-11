import "./Products.scss";
import { useNavigate } from "react-router-dom";
import data from "../../assets/data.json";

function Products() {
  const navigate = useNavigate();

  const handleBuyNowClick = (i) => {
    // Use the navigate function to navigate to the DetailProd route
    navigate(`/product/${i.id}`);
  };
  return (
    <>
      <div className="product">
        {data.map((i) => (
          <div class="card">
            <div class="imgBox">
              <img src={i.image} alt="" width={200} height={200} />
            </div>

            <div class="contentBox">
              <h3>{i.name}</h3>
              <h2 class="price">{i.price}</h2>
              <a className="buy" onClick={() => handleBuyNowClick(i)}>
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
