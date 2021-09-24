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
});
