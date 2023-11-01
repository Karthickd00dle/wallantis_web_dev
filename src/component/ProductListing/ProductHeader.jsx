import "./style.scss";

export function ProductHeader({ bannerLabel, bannerImage }) {
  return (
    <div className="product-banner-container py-3">
      <div className="product-banner-label-container">
        <label className="product-banner-label">{bannerLabel}</label>
      </div>

      <img width="100%" height="505px" src={bannerImage} alt="product-banner" />
    </div>
  );
}
