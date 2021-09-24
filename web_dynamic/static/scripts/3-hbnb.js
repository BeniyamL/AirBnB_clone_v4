$('document').ready(function () {
  const amn = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amn[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amn[$(this).attr('data-id')];
    }
    $('div.amenities h4').text(Object.values(amn).join(', '));
  });

  const $url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get($url, function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    success: fillplaces
  });
});

function fillplaces (data) {
  $('section.places').empty();
  $('section.places').append(data.map(place => {
    return `<article>
          <div class="title_box">
            <h2> ${place.name}</h2>
            <div class="price_by_night">$${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest"> ${place.max_guest} Guests </div>
            <div class="number_rooms">${place.number_rooms} Bedrooms</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
          </div>
          <div class="description">
            ${place.description}
          </div>
        </article>`;
  }));
}
