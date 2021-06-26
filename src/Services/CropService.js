import axios from "axios";

const CROP_API_BASE_URL = "http://localhost:8080/crop";

class CropService {
  getCrops() {
    return axios.get(CROP_API_BASE_URL + "/viewCrop");
  }
  sellCrop(crop) {
    return axios.post(CROP_API_BASE_URL + "/sellCrop", crop);
  }

  getCropById(cropId) {
    return axios.get(CROP_API_BASE_URL + "/viewCropById/" + cropId);
  }
  updateCrop(crop, cropId) {
    return axios.put(CROP_API_BASE_URL + "/updateCrop/", crop);
  }
  deleteCrop(cropId) {
    return axios.delete(CROP_API_BASE_URL + "/deleteCrop/" + cropId);
  }
}

export default new CropService();