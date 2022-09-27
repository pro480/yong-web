import React from "react";

function Header() {
  return (
    <div className="flex border border-black w-screen h-20 items-center">
      <div className="flex px-5 text-center h-full w-52 items-center justify-center border-black border">
        로고
      </div>
      <div className="flex justify-center w-full justify-around">
        <div>센터소개</div>
        <div>연구 및 사업</div>
        <div>전공 소개</div>
        <div>자료실</div>
        <div>공지사항</div>
      </div>
      <div className="flex h-full w-fit px-10 border border-black justify-center items-center">
        <div className="w-28 text-center">검색</div>
        <div className="w-28 text-center">사이트맵</div>
      </div>
    </div>
  );
}

export default Header;
