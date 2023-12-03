import BarChartBox from "../../components/barchartbox/BarChartBox";
import BigChartBox from "../../components/bigchartbox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topbox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import { BaseResponse } from "../../shared/Api/Abstract/BaseResponse";
import { IUserGetResponse } from "../../shared/Api/User/Response/IUserGetResponse";
import UserRepository from "../../shared/Api/User/UserRepository";
import "./home.scss";

const Home = () => {
  const repository: UserRepository = new UserRepository();

  const result = repository
    .getMany<IUserGetResponse>()
    .then((response: BaseResponse<IUserGetResponse[]>) => {
      console.log("users page then");
      console.log(response);
    });
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
