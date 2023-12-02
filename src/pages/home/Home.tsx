import BarChartBox from "../../components/barchartbox/BarChartBox";
import BigChartBox from "../../components/bigchartbox/BigChartBox";
import ChartBox from "../../components/cartbox/ChartBox";
import PieChartBox from "../../components/piechartbox/PieChartBox";
import TopBox from "../../components/topbox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox></TopBox>
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser}></ChartBox>
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct}></ChartBox>
      </div>
      <div className="box box4">
        <PieChartBox></PieChartBox>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion}></ChartBox>
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue}></ChartBox>
      </div>
      <div className="box box7">
        <BigChartBox></BigChartBox>
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit}></BarChartBox>
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue}></BarChartBox>
      </div>
    </div>
  );
};

export default Home;
