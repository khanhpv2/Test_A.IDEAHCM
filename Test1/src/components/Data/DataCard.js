import React from "react";
import { Stack } from "react-bootstrap";

export default function DataCard({ data, districts }) {
  return (
    <Stack
      className="data-card"
      direction="horizontal"
      gap={5}
     
    >
      <div>
        <div
          style={{
            width: "100px",
            aspectRatio: "1",
            backgroundImage: `url(${data.thumbnail})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
      <div className="data-card--info">
        <h2>{data.title}</h2>
        <h3>{data.price / 1000000} triệu/tháng</h3>
        <Stack direction="horizontal" gap={5}>
          <div>
            Diện tích: <span className="area">{data.area}m&sup2;</span>
          </div>
          <div>
            Khu vực:{" "}
            <span className="location">
              {
                districts.filter((item) => item.code === data.district)[0]
                  .path_with_type
              }
            </span>
          </div>
        </Stack>
        <div style={{ marginTop: "10px" }}>{data.content}</div>
      </div>
    </Stack>
  );
}
