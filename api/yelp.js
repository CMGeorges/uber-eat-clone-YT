import axios from "axios";

const YELP_API_KEY =
  "8NmU5vG06oQ1HcRokTCCz8d8SfkGtcSvq-FgBOHazx-0_8mah3e_z-cSv4GaxMbVC4eDl5CriCBfpRwSvTqF5nHytbFZpZ8ihfMrI3vefVkG0Pr7CPgZ82IKgNWzYXYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});
