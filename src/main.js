import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { LocService } from './LocService';

$().ready(function(){
    let locationService = new LocService();
    locationService.getLatLong('seattle')
    .then(function(response){
        let body = JSON.parse(response);
        console.log(body.results[0].locations[0].latLng);
    });
  
});