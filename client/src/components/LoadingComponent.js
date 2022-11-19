import React from "react";
import "../styles/LoadingComponent.scss";
import $ from "jquery";
$("#toggle").click(function () {
  $(".circle-loader").toggleClass("load-complete");
  $(".checkmark").toggle();
});

const LoadingComponent = (props) => {
  return (
    <div className="circle-loader">
      <div className="checkmark draw"></div>
    </div>
  );
};

export default LoadingComponent;
