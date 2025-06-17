jQuery(document).ready(function () {
  //  Plugin code start
  $('.ticker').ticker();
  //  Plugin code end

  //  My Portfolio - Image Modal
  $('.project-thumb').on('click', function () {
    const imgSrc = $(this).data('img');
    $('#modalImage').attr('src', imgSrc);
    new bootstrap.Modal(document.getElementById('imageModal')).show();
  });
});
