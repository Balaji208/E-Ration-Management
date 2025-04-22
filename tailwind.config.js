const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{html,js}",
  flowbite.content(),],
  theme: {
    extend: {
      height:
      {
        '104':'30rem',
        '200':'36rem',
        '350px':'350px',
        '10':'45px',
        '0.5':'2px',
       
      },
      width:
      {
        '104':'26rem',
        '200':'36rem',
        '200px':'100px',
        '350px':'350px',
      },
      margin:
      { '76':'257px'

      },
      backgroundImage: {
        'custom-gradient': ' linear-gradient(9deg, rgba(197,85,213,1) 0%, rgba(128,85,213,1) 4%)',
        'gradient2' : 'linear-gradient(9deg, rgba(207,159,255,1) 26%, rgba(255,255,240,1) 93%);',
        'gradient3': 'radial-gradient(circle at 10% 20%, rgb(64, 84, 178) 0%, rgb(219, 2, 234) 90%);',
        'card':' linear-gradient(72deg, rgba(227,208,255,1) 0%, rgba(230,225,235,1) 95%);',
        'background-gradient' :'linear-gradient(72deg, rgba(227,208,255,1) 0%, rgba(241,241,241,1) 100%)'
      },
     
      
  },
  plugins: [
    flowbite.plugin()
    
   
  ],
}
}