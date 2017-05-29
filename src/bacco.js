<script>
  function initMap() {
    var uluru = {lat: 44.204476, lng: 28.619180};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHuQ49a3wJNp1_n2_vE6N2lrcwCk-_mII&callback=initMap">
</script>
