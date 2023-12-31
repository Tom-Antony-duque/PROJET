import {useEffect, useState} from "react";
import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
import {usersRequest} from "../../requestMethods";


export default function FeaturedInfo(){
const [income, setIncome] = useState([])
const [perc, setPerc] = useState(0)


useEffect(()=> {
  const getIncome = async ()=> {
    try{
      const res = await usersRequest.get("orders/income");
      if (res.data && Array.isArray(res.data) && res.data.length >= 2) {
        const total1 = res.data[0].total || 0;
        const total2 = res.data[1].total || 0;
        setIncome(res.data);
        setPerc((total2 * 100) / total1 - 100);
      }else{
        console.error("Réponse API inattendue : ", res.data);
      }
    }catch(error){
      console.error(error);
    }
  };
    getIncome();
},[])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">revenus</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">
   {income.length > 1 ? `$${income[1].total}` : 'N/A'}
   </span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}
            {perc < 0 ?(
              <ArrowDownward  className="featuredIcon negative"/>
            ) : (
              <ArrowUpward className="featuredIcon"/>
              )}
          </span>
        </div>
        <span className="featuredSub">Par rapport au mois dernier</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ventes</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Par rapport au mois dernier</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Coûts</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Par rapport au mois dernier</span>
      </div>
    </div>
  );
}
