import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import DataCard from "./components/Data/DataCard";
import Data from "./data.json";
import Districts from "./quan_huyen.json";
import Cities from "./tinh_tp.json";

const citiesArr = Object.keys(Cities).map((key) => Cities[key]);
const districtsArr = Object.keys(Districts).map((key) => Districts[key]);
const priceRanges = [
  {
    name: "Dưới 1 triệu",
    minPrice: 0,
    maxPrice: 1000000,
  },
  {
    name: "1 triệu - 2 triệu",
    minPrice: 1000000,
    maxPrice: 2000000,
  },
  {
    name: "2 triệu - 3 triệu",
    minPrice: 2000000,
    maxPrice: 3000000,
  },
  {
    name: "3 triệu - 5 triệu",
    minPrice: 3000000,
    maxPrice: 5000000,
  },
  {
    name: "5 triệu - 7 triệu",
    minPrice: 5000000,
    maxPrice: 7000000,
  },
  {
    name: "7 triệu - 10 triệu",
    minPrice: 7000000,
    maxPrice: 10000000,
  },
  {
    name: "10 triệu - 15 triệu",
    minPrice: 10000000,
    maxPrice: 15000000,
  },
];
const areaRanges = [
  {
    name: "Dưới 20 m2",
    minArea: 0,
    maxArea: 20,
  },
  {
    name: "20 - 30 m2",
    minArea: 20,
    maxArea: 30,
  },
  {
    name: "30 - 50 m2",
    minArea: 30,
    maxArea: 50,
  },
  {
    name: "50 - 60 m2",
    minArea: 50,
    maxArea: 60,
  },
  {
    name: "60 - 70 m2",
    minArea: 60,
    maxArea: 70,
  },
  {
    name: "70 - 80 m2",
    minArea: 70,
    maxArea: 80,
  },
  {
    name: "80 - 100 m2",
    minArea: 80,
    maxArea: 100,
  },
];

function App() {
  const [data, setData] = useState(Data);
  const [districts, setDistricts] = useState([]);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [price, setPrice] = useState([""]);
  const [area, setArea] = useState([""]);

 
  const handleChangeciti = (e) => {
    setCity(e.target.value);
    setDistricts(
      districtsArr.filter((item) => item.parent_code === e.target.value)
    );
    setDistrict("");
    setPrice([""]);
    setArea([""]);
  }
  
  const handleChangedistrict = (e) => {
    setDistrict(e.target.value);

  }
  const handleSubmitform = (e) => {
    e.preventDefault();
    if (city === "" && district === "" && price[0] === "" && area[0] === "") {
      setData(Data);
    } else {
      setData(
        Data.filter((item) => (city !== "" ? item.city === city : item))
          .filter((item) =>
            district !== "" ? item.district === district : item
          )
          .filter((item) =>
            price[0] !== ""
              ? item.price >= price[0] && item.price <= price[1]
              : item
          )
          .filter((item) =>
            area[0] !== "" ? item.area >= area[0] && item.area <= area[1] : item
          )
      );
    }
  }

  return (
    <div>
      
      <form className="form" onSubmit={handleSubmitform}>
        <div>
          <Form.Label htmlFor="city">Tỉnh thành</Form.Label>
          <Form.Select id="city" onChange={handleChangeciti}>
            <option value="">--- Tỉnh thành ---</option>
            {citiesArr.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label htmlFor="district">Quận huyện</Form.Label>
          <Form.Select id="district" onChange={handleChangedistrict}>
            <option value="">--- Quận/huyện ---</option>
            {districts.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label htmlFor="price">Khoảng giá</Form.Label>
          <Form.Select
            id="price"
            onChange={(e) => setPrice(e.target.value.split(","))}
          >
            <option value="">Chọn mức giá</option>
            {priceRanges.map((item, index) => (
              <option key={index} value={[item.minPrice, item.maxPrice]}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label htmlFor="area">Diện tích</Form.Label>
          <Form.Select
            id="area"
            onChange={(e) => setArea(e.target.value.split(","))}
          >
            <option value="">Chọn diện tích</option>
            {areaRanges.map((item, index) => (
              <option key={index} value={[item.minArea, item.maxArea]}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <Button type="submit" color="orange">
          Lọc tin
        </Button>
      </form>

     
      <div className="container">
        {data.length > 0 ? (
          <Stack className="data-stack">
            {data.map((item, index) => (
              <div key={index}>
                <DataCard data={item} districts={districtsArr} />
                {index !== data.length - 1 && <div className="divider" />}
              </div>
            ))}
          </Stack>
        ) : (
          <p>Không tìm thấy kết quả nào</p>
        )}
      </div>
    </div>
  );
}

export default App;
