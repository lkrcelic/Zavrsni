import { useState } from "react";

//toggle -> riječnik HZJ, uklonjeno
//toggle1 -> zanimljivosti
//toggle2 -> next modal

const useModal = () => {
  const [isShowing1, setIsShowing1] = useState(false);
  const [isShowing2, setIsShowing2] = useState(false);
  const [isShowing3, setIsShowing3] = useState(false);
  const [isShowing5, setIsShowing5] = useState(false);
  const [isShowingFunFact, setIsShowingFunFact] = useState(false);


  function toggle1() {
    setIsShowing1(!isShowing1);
  }
  function toggle2() {
    setIsShowing2(!isShowing2);
  }
  function toggle3() {
    setIsShowing3(!isShowing3);
  }

  function toggle5() {
    setIsShowing5(!isShowing5);
  }

  function toggleFunFact() {
    setIsShowingFunFact(!isShowingFunFact);
  }

  return {
    isShowing1,
    isShowing2,
    isShowing3,
    isShowing5,
    isShowingFunFact,
    toggle1,
    toggle2,
    toggle3,
    toggle5,
    toggleFunFact,
  };
};

export default useModal;