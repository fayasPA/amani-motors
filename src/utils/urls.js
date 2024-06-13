const development = true
// console.log('@config.jsx', development);
let urls;

if (development) {
  // development urls
  urls = {
    BASE_URL: "http://localhost:8080/myapp/",
    BASE_IMAGE_URL: "http://localhost:8080",
  };
} else {
  // Production urls
  urls = {
    BASE_URL: "https://amanimotors.co.in/",
    BASE_IMAGE_URL: "http://amanimotors.co.in/static",
  };
}

export const { BASE_URL, BASE_IMAGE_URL } = urls;

export const GET_BANNER_VEHICLES = 'get_banner_vehicles';
export const GET_LATEST_VEHICLES = 'get_all_vehicles_homepage';
export const GET_ALL_VEHICLES = 'get_stockcar_all';
