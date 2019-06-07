import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { LocService } from './LocService';
import { DocService } from './DocService';

function parseLatLong(json) {
    let body = JSON.parse(json);
    return `${body.results[0].locations[0].latLng.lat},` + `${body.results[0].locations[0].latLng.lng},` + '100';
}

function parseDoc(object, index) {
    function parseAddress(addressObject){
        let addressOutput = "";
        addressOutput += `${addressObject.street} `;
        if(object.street2 != undefined) {
            addressOutput += `${addressObject.street2} `;
        }
        addressOutput += `${addressObject.city}, ${addressObject.state} ${addressObject.zip}`;
        return addressOutput;
    }
    let output = `<div id="result${index}"><p class="doc-name">${object.data[index].practices[0].name}</p><div class="more-info"><p class="address">Address: ${parseAddress(object.data[index].practices[0].visit_address)}</p><p class="phone">Tel: ${object.data[index].practices[0].phones[0].number}</p>`;
    if(object.data[index].practices[0].accepts_new_patients){
        output += `<p class="new-patients">This doctor is accepting new patients.</p>`;
    } else {
        output += `<p class="new-patients">This doctor is not accepting new patients.</p>`;
    }
    output += `</div></div>`;
    return output;
}

$().ready(function(){
    $('#searchForm').submit(function(e){
        e.preventDefault();
        $('#results').empty();
        let locationService = new LocService();
        let thisLoc = $('#location').val();
        locationService.getLatLong(thisLoc)
        .then(function(response){
            let location = parseLatLong(response);
            let query = $('#query').val();
            let doctorService = new DocService();
            return doctorService.getDocs(query, location);
        })
        .then(function(response){
            let results = JSON.parse(response);
            let resultsHtml = "";
            for(let i = 0; i < results.data.length; i++){
                resultsHtml += parseDoc(results, i);
            }
            $('#results').append(resultsHtml);
        });
    });
  
});