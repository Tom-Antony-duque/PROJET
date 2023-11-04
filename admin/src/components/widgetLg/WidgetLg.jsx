import {useState, useEffect} from "react";
import {usersRequest} from "../../requestMethods";
import "./widgetLg.css";
import {format} from "timeago.js";

export default function WidgetLg(){
  const [Orders, setOrders] = useState([]);

  useEffect(()=>{
    const getOrders = async ()=>{
      try{
        const res = await usersRequest.get("orders");
        setOrders(res.data);
      }catch(error) {
        console.error(error);
      }
    };
    getOrders();
  }, []);

  const Button = ({type})=>{
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Dernières transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Clients</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Montant</th>
            <th className="widgetLgTh">Statut</th>
          </tr>
          {Orders.map((order) => ( 
            <tr className="widgetLgTr" key={order.id}>
              <td className="widgetLgUser">
                <span className="widgetLgName">{format(order.userId)}</span>
              </td>
              <td className="widgetLgDate">{order.createdAt}</td>
              <td className="widgetLgAmount">${order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
