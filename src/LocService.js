export class LocService {
    getLatLong(location) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.LOC_KEY}&location=${location}`
            request.onload = function() {
                if (this.status == 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.open("GET", url, true);
            request.send();
        });
    }

}