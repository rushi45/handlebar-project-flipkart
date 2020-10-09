var source = document.getElementById("header-template").innerHTML;
var template = Handlebars.compile(source);
var data = {
  links: ["home", "Phones", "Music", "Camera", "Iphone"],
  products: [
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/416/416/kesv0y80/mobile/p/2/x/poco-m2-mzb9918in-original-imafvdqw3bbewa42.jpeg?q=70",
      name: "POCO M2",
      specs: ["6gb ram", "64 gb internal"],
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/416/416/kcjexe80/mobile/w/j/9/realme-6i-rmx2002-original-imaftngrxb8bg9jr.jpeg?q=70",
      name: "POCO M2",
      specs: ["6gb ram", "64 gb internal"],
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/416/416/k5y7tzk0/mobile/x/m/j/nokia-105-ss-ta-1203-original-imafzgu88gznhphg.jpeg?q=70",
      name: "POCO M2",
      specs: ["6gb ram", "64 gb internal"],
    },
    {
      imgurl:
        "https://rukminim1.flixcart.com/image/416/416/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbqgb.jpeg?q=70",
      name: "Apple-macbook pro",
      specs: ["1tb ssd", "12gb ram", "15.6 "],
    },
    {
        imgurl:
          "https://rukminim1.flixcart.com/image/416/416/kesv0y80/mobile/p/2/x/poco-m2-mzb9918in-original-imafvdqw3bbewa42.jpeg?q=70",
        name: "POCO M2",
        specs: ["6gb ram", "64 gb internal"],
      },
      {
        imgurl:
          "https://rukminim1.flixcart.com/image/416/416/kcjexe80/mobile/w/j/9/realme-6i-rmx2002-original-imaftngrxb8bg9jr.jpeg?q=70",
        name: "POCO M2",
        specs: ["6gb ram", "64 gb internal"],
      },
      {
        imgurl:
          "https://rukminim1.flixcart.com/image/416/416/k5y7tzk0/mobile/x/m/j/nokia-105-ss-ta-1203-original-imafzgu88gznhphg.jpeg?q=70",
        name: "POCO M2",
        specs: ["6gb ram", "64 gb internal"],
      },
      {
        imgurl:
          "https://rukminim1.flixcart.com/image/416/416/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbqgb.jpeg?q=70",
        name: "Apple-macbook pro",
        specs: ["1tb ssd", "12gb ram", "15.6 "],
      },
  ],
};

var content = template(data);
document.querySelector("body").innerHTML += content;
