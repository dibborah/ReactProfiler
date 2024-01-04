import { memo } from "react";

const Card = () => {
  console.log("Card Rendered");
  // We will use React Memo b/c whenever the state 2 is changed the card 2 is rendered unnecessarily
  // So to make our code more efficient we will use React Memo
  return (
    <div
      style={{
        background: "green",
        width: "300px",
        height: "100px",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      Card
    </div>
  );
};
//This is a MEMOIZED COMPONENT
export default memo(Card); // Is ka matab hain ki agar is component ka prop change hoga tabhi is component ko render kardena warna mat render karna
// If we export the component with the memo function we export the memoized version of the component

// Why react doesnot does it by default??Why do we have to use React memo() to achieve this functionality
