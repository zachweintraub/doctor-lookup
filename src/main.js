import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { LocService } from './LocService';
import { DocService } from './DocService';

function parseLatLong(json) {
    let body = JSON.parse(json);
    return `${body.results[0].locations[0].latLng.lat},` + `${body.results[0].locations[0].latLng.lng},` + '10';
}

function parseDoc(object, index) {
    return `<div id="result${index}">
        <p class="doc-name">${object.data[index].profile.last_name}, ${object.data[index].profile.first_name} ${object.data[index].profile.middle_name}
        </p>
    </div>`;
}

$().ready(function(){
    $('#searchForm').submit(function(e){
        e.preventDefault();
        let locationService = new LocService();
        let thisLoc = $('#location').val();
        locationService.getLatLong(thisLoc)
        .then(function(response){
            let location = parseLatLong(response);
            console.log(location);
            let query = $('#query').val();
            let doctorService = new DocService();
            return doctorService.getDocs(query, location);
        })
        .then(function(response){
            let results = JSON.parse(response);
            console.log(results);
            let resultsHtml = "";
            for(let i = 0; i < results.data.length; i++){
                resultsHtml += parseDoc(results, i);
                console.log(resultsHtml);
            }
            $('#results').append(resultsHtml);
        });
    });
  
});