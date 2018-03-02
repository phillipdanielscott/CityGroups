$(document).ready(function() {
    $('#wrapper').fullpage({
        sectionsColor: ['', '#d5d5d5', '#d5d5d5', '#d5d5d5', '#d5d5d5']
    });

    // Group List

    var getJSON = function(url, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = callback;
      request.send();
    };

    getJSON('./assets/js/mensgroup.json', loadMensGroups);

    function loadMensGroups (e) {
      var groups = JSON.parse(e.target.responseText);

      groups.forEach(function(group) {
        $('#group-table')
        .append(
          `<tr>
            <td>${group.name}</td>
            <td>${group.location}</td>
            <td>${group.dayofweek}</td>
            <td>${group.time}</td>
            <td>${group.kids}</td>
            <td>
              <a class="signup-btn" href="${group.signuplink}" target="blank">Sign Up</a>
            </td>
          </tr>`
        );
      })
    }

    function loadWomensGroups () {

    }


    // Google Map

    // Initializes map and defaults to the men groups url
    $('<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1LAWWyZCiU7v8otNHZt_U6Us6RC7ApkWJ" width="640" height="480"></iframe>')
     .appendTo('#map');

    // Addes click listeners to the buttons when choosing men or womens small group
    $('#women-selector').click("click", womenSelector);
    $('#men-selector').click("click", menSelector);

    // Removes the iframe when changing groups
    function emptyMap() {
      $('#map').empty();
    }

    function womenSelector() {
      emptyMap();
      $('<iframe src=" https://www.google.com/maps/d/u/0/embed?mid=1sBsy1oCa4Hk-6XnS7bRpVju5qfcybEXI"></iframe>')
       .appendTo('#map');
    }

    function menSelector() {
      emptyMap();
      $('<iframe src=" https://www.google.com/maps/d/u/0/embed?mid=1LAWWyZCiU7v8otNHZt_U6Us6RC7ApkWJ"></iframe>')
       .appendTo('#map');
    }


});
