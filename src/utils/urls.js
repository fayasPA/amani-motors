const development = true
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
    BASE_URL: "https://amanimotors.in/myapp/",
    BASE_IMAGE_URL: "https://amanimotors.in",
  };
}

export const { BASE_URL, BASE_IMAGE_URL } = urls;

export const GET_BANNER_VEHICLES = 'get_banner_vehicles';
export const GET_LATEST_VEHICLES = 'get_all_vehicles_homepage';
export const GET_ALL_VEHICLES = 'get_stock_car_all';
export const GET_FILTER_TYPES = 'get_filter_types';
export const GET_VEHICLE_DETAILS = 'get_specific_vehicle';
export const GET_YOUTUBE_LINKS = 'get_youtube_links';
