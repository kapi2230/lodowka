import { observer } from "mobx-react";
import MainTemplate from "../templates/MainTemplate";

const FridgeScreen: React.FC = observer(() => {
  return (
    <MainTemplate>
      <div className="content">
        <ul>
          <li>
            <p>KETCHUP</p>
            <p>300/480g</p>
            <p className="expired">03.02.2022</p>
          </li>
          <li>
            <p>CEBULA</p>
            <p>x2</p>
            <p>13.03.2022</p>
          </li>
          <li>
            <p>OLIWKI</p>
            <p>100/350g</p>
            <p>23.04.2022</p>
          </li>
          <li>
            <p>SER</p>
            <p>150g</p>
            <p className="expired">23.04.2021</p>
          </li>
        </ul>
      </div>
    </MainTemplate>
  );
});

export default FridgeScreen;
