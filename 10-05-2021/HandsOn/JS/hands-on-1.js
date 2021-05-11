$(() => {
    $('#selected-plays > li>ul>li')
    .addClass('special');
    $('table tr td:nth-child(3)').addClass('year');

    $('td:contains(Tragedy)').first().addClass('special');
   });