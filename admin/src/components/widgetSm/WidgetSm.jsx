import "./widgetSm.css";
import {Visibility} from "@material-ui/icons";
import {useEffect, useState} from "react";
import {usersRequest} from "../../requestMethods";
//import {apiRequest} from "../../requestMethods";


export default function WidgetSm(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async()=> {
      try{
        const res = await usersRequest.get("users/?new=true");
        setUsers(res.data);
      }catch(error){
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return(
    <div className="widgetSm">
      <span className="widgetSmTitle">Nouveaux membres</span>
      <ul className="widgetSmList">
        {users.map(user => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAARVBMVEX///+UlZmPkJXQ0dOKi46Fhor39/iJio/7+/vg4OHw8PCMjZLc3N3Hx8mXmJzt7e2kpaivsLKdnqHn5+i3uLvAwcOqq69CAemAAAAC0UlEQVR4nO2ajXajIBCFARVUggoS3/9RV41tdtsoQ+jV7jncB4hf5pcZYCwrKysrKysrKwupsTDG3IubvOj7jS3FJs19U58PMAjBnxLCmXNtIa3iX6X5/URLGP0NYDWFKk4CqKfXBAvEYJoWTyCHXYLFHbrzPZigduKAYDWFvmMRphDBYooJSVAQCGZDWCACBWCxg4ERFEeh+LdKWGIMRAIuPIigpRJwrkD1uvlel3fNAKqU5FCYBUrMnebwUg7jCUOqCpswORFjBY1pFTGxAEJoyssRxggrgGIhojTxDpMRNblAcz5ACBjz5KyENQl6SmjUUVZWVAR1AyEwcp+CIdTXW6GmW6EBITByRuAQqAS8gg00jowAOr/e2ERFKCXEE6Oyd2owdLZENIm2E/QmIToAQUQkLAiY8yu9S83BgGkSv+HI0l3tB8YsHQG15yDnJFcjCIE+VJYgAtaSmzWmKiyiOgK46vGCtmwSuE1P6yjlSVjQXL2qbgkRWcLOrqtaQoWEZeSGECbgCruIloR2KbAIlLkSNNJ+itAnBvDlSLhPwEbaD4X7BGyk/VQwKyv4JVXIE9CrgIdkKBSwhWnV8foRHoyrDqsTuig8JA+iQaAv6DaNuztQjW2ST+3vnPAJGUY46/Y8I2SE/wPhhPcLi/qDId+dUh3N4aFF4QapD42hRxTCYbt1bwmjjLA4bzRW0cZaNWE2n0Zo+spNc/Oz/qh743jMdfFiCu5M/1ONs/GDjtn3PU2hB5/ukdFMqoz8///YolRTgkvkzc/uT/j+RjH/hH/nSWLd2C7980+Mzo6RgVG4FPO/pFAuZtIrxFvhF5ImP3E5fkqXBjGRYkIGn9IlSFCWceHHfGkMhAWIh3nhIR0cOmPeSbyp0MmK9p4wRcG0oDyqTEQI3dhEvNp5m+F6hNB9SUbICBkhI2SEixBUAKEScFUBhOIEBRCysrIu1h872iZ2ifehVwAAAABJRU5ErkJggg=="
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
