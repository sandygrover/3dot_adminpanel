import React from "react";
import "./DarkMode.css";

const Toggle = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }
    // const bkelement=document.querySelector(".c-body");
    // const cardelement=document.querySelector(".chgdiv");
    // const cardelement2=document.querySelector(".chgdiv2");
    // const cardheader=document.querySelector(".card-header");
    // const table=document.querySelector(".table");
    // if (theme === 'light') {
    //     bkelement.classList.add("lightbg");
    //     cardelement.classList.add("lightbg");
    //     if(cardelement2!=null){cardelement2.classList.add("lightbg");}
    //     cardheader.classList.add("lightbg");
    //     if(table!=null){table.style.color="#3c4b64";}
    //     document.querySelector(".c-sidebar").style.background="#3c4b64";
    //     document.querySelector(".c-header").style.background="#fff";
    //     document.querySelector(".c-footer").style.background="#ebedef";
    //     document.querySelector(".c-header-nav-link").style.color="#00001580";
    // } else {
    //     bkelement.classList.add("darkbg");
    //     cardelement.classList.add("darkbg");
    //     if(cardelement2!=null){cardelement2.classList.add("darkbg");}
    //     cardheader.classList.add("darkbg");
    //     if(table!=null){table.style.color="#ffffff";}
    //     document.querySelector(".c-sidebar").style.background="#112a3e";
    //     document.querySelector(".c-header").style.background="#1d3548";
    //     document.querySelector(".c-footer").style.cssText="background:#1d3548;color:white;";
    //     document.querySelector(".c-header-nav-link").style.color="#ffffff";
    // }

  const switchTheme = (e) => {
    const bkelement=document.querySelector(".c-body");
    const cardelement=document.querySelector(".chgdiv");
    const cardelement2=document.querySelector(".chgdiv2");
    const cardheader=document.querySelector(".card-header");
    const table=document.querySelector(".table");
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      bkelement.classList.remove("darkbg");bkelement.classList.add("lightbg");
      cardelement.classList.remove("darkbg");cardelement.classList.add("lightbg");
      if(cardelement2!=null){cardelement2.classList.remove("darkbg");cardelement2.classList.add("lightbg");}
      cardheader.classList.remove("darkbg");cardheader.classList.add("lightbg");
      if(table!=null){table.style.color="#3c4b64";}
      document.querySelector(".c-sidebar").style.background="#3c4b64";
      //document.querySelector(".c-subheader").style.background="#fff";
      document.querySelector(".c-header").style.background="#fff";
      document.querySelector(".c-footer").style.background="#ebedef";
      document.querySelector(".c-header-nav-link").style.color="#00001580";
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      bkelement.classList.remove("lightbg");bkelement.classList.add("darkbg");
      cardelement.classList.remove("lightbg");cardelement.classList.add("darkbg");
      if(cardelement2!=null){cardelement2.classList.remove("lightbg");cardelement2.classList.add("darkbg");}
      cardheader.classList.remove("lightbg");cardheader.classList.add("darkbg");
      if(table!=null){table.style.color="#ffffff";}
      document.querySelector(".c-sidebar").style.background="#112a3e";
      //document.querySelector(".c-subheader").style.background="#1d3548";
      document.querySelector(".c-header").style.background="#1d3548";
      document.querySelector(".c-footer").style.cssText="background:#1d3548;color:white;";
      document.querySelector(".c-header-nav-link").style.color="#ffffff";
    }
  };

  return (
    <button className={theme === "dark" ? clickedClass : ""} id="darkMode" onClick={(e) => switchTheme(e)}></button>
  );
};

export default Toggle;