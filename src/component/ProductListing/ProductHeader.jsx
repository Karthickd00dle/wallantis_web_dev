import { productBanner } from "config";
import "./style.scss";

export function ProductHeader({ bannerLabel }) {
  const bannerImage = productBanner.filter((data) => data.type === bannerLabel);

  return (
    <div className="product-banner-container py-3">
      <div className="product-banner-label-container">
        <label className="product-banner-label">{bannerLabel}</label>
      </div>

      <img
        width="100%"
        height="505px"
        src={bannerImage[0]?.image}
        alt="product-banner"
      />
    </div>
  );
}
