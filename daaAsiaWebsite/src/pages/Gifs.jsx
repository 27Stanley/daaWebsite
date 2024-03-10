import React from "react";

export default function () {
  return (
    <div>
      <div>
        {React.createElement("dotlottie-player", {
          src: "https://lottie.host/a4bf4c43-b7eb-41dd-adda-1c01b6e5bafc/SJlNhdpXxW.json",
          background: "transparent",
          speed: "1",
          style: { width: "600px", height: "600px" },
          loop: true,
          autoplay: true,
        })}
      </div>
      <div>
        {React.createElement("dotlottie-player", {
          src: "https://lottie.host/e5fceedf-f4af-4c87-854f-750f216bbe27/wS2UMv2OeC.json",
          background: "transparent",
          speed: "1",
          style: { width: "600px", height: "600px" },
          loop: true,
          autoplay: true,
        })}
      </div>

      <div>
        {React.createElement("dotlottie-player", {
          src: "https://lottie.host/29b54e02-0cc7-4ad8-9dbd-6919de060f4e/THENfQNgX3.json",
          background: "transparent",
          speed: "1",
          style: { width: "600px", height: "600px" },
          loop: true,
          autoplay: true,
        })}
      </div>
    </div>
  );
}
