import Association from "./association";
import Hit from "./Hit";
import MoneySecure from "./MoneySecure";
import Safest from "./Safest";
import Treasure from "./Treasure";
import Withdraw from "./Withdraw";

const TrashToTreasure = () => {
  return (
    <>
      <Treasure></Treasure>
      <Association></Association>
      <Hit></Hit>
      <Safest></Safest>
      <Withdraw></Withdraw>
      <MoneySecure></MoneySecure>
    </>
  )
}
export default TrashToTreasure;