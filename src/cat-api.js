import axios from "axios"


axios.defaults.headers.common["x-api-key"] = "live_fTnlBiJcKBYHaBpRRamKH2se5xkBiHmNKlI2CEiGLgh4WVXICOW8An4nHdCuGoeV";
export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${ali_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.jsone();
        });
};