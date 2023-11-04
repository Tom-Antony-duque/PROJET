import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import {useMemo, useEffect, useState} from "react";
import {usersRequest} from "../../requestMethods";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";




export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    ()=> [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(()=> {
    const getStats = async ()=>{
      try{
        const res = await usersRequest.get("/users/stats");
        const formattedData = MONTHS.map((month)=> ({
          name: month,
          "Utilisateur actif": 0,
        }));

        res.data.forEach((item)=> {
          const monthIndex = item._id - 1;
          formattedData[monthIndex]["Utilisateur actif"] = item.total;
        });

        setUserStats(formattedData);
      }catch(error){
        console.error("Erreur lors de la récupération des statistiques :", error);
      }
    };
    getStats();
  }, [MONTHS]);

  return(
    <div className="home">
      <FeaturedInfo/>
      <Chart
        data={userStats}
        title="Analyse des utilisateurs"
        grid
        dataKey="Utilisateur actif"
      />
      <div className="accueilWidgets">
      <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
