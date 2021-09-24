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
});
