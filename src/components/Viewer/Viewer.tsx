import React from "react";
import "./Viewer.css";

const Viewer: React.FC<IViewerProps> = ({ catalogImage }) => {
  return (
    <div className="viewer">
      <img alt="catalog-view" src={catalogImage} data-testid="catalog-view" />
    </div>
  );
};

export default Viewer;
