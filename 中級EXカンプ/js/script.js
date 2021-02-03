/* アコーディオン */

jQuery(function ($) {
    // 最初のコンテンツ以外は非表示
    $(".accordion-content:not(:first-of-type)").css("display", "none");
    //タイトルがクリックされたら
    $(".js-accordion-title").click(function () {
    //クリックされたtitle以外のcontentを閉じる
    $(".js-accordion-title").not(this).next().slideUp(300);
    //thisのcontentを展開、開いていれば閉じる
    $(this).next().slideToggle(300);

    });
});

/* 問い合わせフォーム */

$(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
  
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
  
  });

  $(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdzu_YChWW4MrmNZJZhqtj6VweDWVDCgdKT980TBPDeQj8fRQ/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            //$(".end-message").slideDown();
            //$(".submit-btn").fadeOut();
            window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });


  /* スクロールアニメーション */
  $(function() {
    $('body a').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': position -94
        },500);
    });

});
