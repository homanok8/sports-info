$(function() {

    // 로그인 자세히 버튼 토글
    $('#loginDetailToggle').click(function() {
        let crnTxt = $(this).find('span').text();

        if (crnTxt === "자세히") {
            $(this).find('span').text('접기');
        } else {
            $(this).find('span').text('자세히');
        }

        $(this).next().stop().slideToggle();
        $(this).stop().toggleClass('open');
    });

    // 로그인 비밀번호 보이기 버튼 토글
    $('#hidePassword').click(function() {
        $(this).stop().toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('img').attr({
                'src': 'images/icons/view-disabled-icon.png',
                'alt': '비밀번호 가리기'
            });
            $(this).prev().attr('type', 'text');
        } else {
            $(this).find('img').attr({
                'src': 'images/icons/view-icon.png',
                'alt': '비밀번호 보기'
            });
            $(this).prev().attr('type', 'password');
        }
    });

    // 로그인 버튼 활성화
    $('#userId, #userPw').keyup(function() {
        if ($('#userId').val() && $('#userPw').val()) {
            $('#loginBtn').attr('disabled', false);
        } else {
            $('#loginBtn').attr('disabled', true);
        }
    });

    // 비밀번호 변경 저장 버튼 활성화
    $('#userPw, #userPwChk').keyup(function() {
        if ($('#userPw').val() && $('#userPwChk').val()) {
            $('#pwSaveBtn').attr('disabled', false);
        } else {
            $('#pwSaveBtn').attr('disabled', true);
        }
    });

    // 로그인 팝업 확인 버튼
    $('#loginPopCheck').click(function() {
        $(this).parents('.popup').removeClass('on');
    });

    // 팝업 닫기
    $('.popup__close').click(function() {
        $(this).parents('.popup').removeClass('on');
    });

});