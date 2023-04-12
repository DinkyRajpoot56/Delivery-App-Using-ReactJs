/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        150:"150px",
        190:"190px",
        221:"221px",
        275:"275px",
        300:"300px",
        340:"340px",
        350:"350px",
        375:"375px",
        440:"440px",
        656:"656px",
        680:"680px",
        500:"500px",
      },
      height: {
        80:"80px",
        150:"150px",
        225:"225px",
        300:"300px",
        370:"370px",
        420:"420px",
        510:"510px",
        600:"600px",
        685:"685px",
        800:"800px",
        "90vh":"90vh",

      },
      minwidth:{
        210:"210px",
        350:"350px",
        620:"620px",
      },
      screens:{
        ln:"640px",
        md:"760px",
        lg:"1020px",
        xl:"1200px",
        "2xl":"1514px",
      },
      colors:{
        headingcolor:"#2e2e2e";
        textcolor:"#515151";
        cartNumbg:"#eb0013";
        primary:"#f5f3f3";
      },
    },
  },
  plugins: [],
}
