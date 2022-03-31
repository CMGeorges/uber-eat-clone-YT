import axios from "axios";

//Valid for 30 days
const UBER_API_KEY =
  "IA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAGgAAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAdAAAABwAAAAEAAAAEAAAAEXMcpcDUmZ_Cc5cgGIK25tOAAAAuGsygby9pSBKuc9FzGtkwzlxwpmxUL3IBL1Es8J1LDnW8tWBW1MKXHPuWcFHK-Xh9q7UgvIVKAoF3z1F1g38_Nm_KlI3vboOc6A_KTVdAAAMAAAAz1Bz7bNxDA7ixgF6JAAAAGIwZDg1ODAzLTM4YTAtNDJiMy04MDZlLTdhNGNmOGUxOTZlZQ";

export default axios.create({
  baseURL: "https://api.uber.com/v1/eats",
  headers: {
    Authorization: `Bearer ${UBER_API_KEY}`,
  },
});
