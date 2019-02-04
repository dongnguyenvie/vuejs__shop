<template>
    <div class="container-fluid">
        <div>
             <div id="map"></div>
        </div>
        <h1>This is contact</h1>
        <p>contact me: <span>dongnguyenvie@gmail.com</span></p>
    </div>    
</template>

<script>
document.addEventListener('DOMContentLoaded', function(){

})
export default {
    beforeCreated(){
        let sdkMap = document.createElement('script')
        sdkMap.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBH2bu9_iQVMgKDwoSPQBulvYhuf3snH48')
        document.head.appendChild(sdkMap)
    },
    created(){
        this.initMap()
    },
      mounted: function() {
        //console.log("map: ", google.maps)
            this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:61.180059, lng: -149.822075},
            scrollwheel: false,
            zoom: 4
            })
  }
}


</script>

<style>
    @import 'Contact.scss'
</style>
