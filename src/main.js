import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { LocService } from './LocService';
import { DocService } from './DocService';

function parseLatLong(json) {
    let body = JSON.parse(json);
    return body.results[0].locations[0].latLng;
}

function parseDoc(object, index) {

}

$().ready(function(){
    $('#searchForm').submit(function(e){
        e.preventDefault();
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
            
        });
    });
  
});