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

    // 로그인 팝업, 비밀번호 변경 확인 버튼
    $('#loginPopCheck').click(function() {
        $(this).parents('.popup').removeClass('on');
    });

    // 팝업 닫기
    $('.popup__close').click(function() {
        $(this).parents('.popup').removeClass('on');
    });

    // 메인 체육활동, 교육참여 메뉴 토글
    $('.main__toggle-btn').click(function() {
        $(this).toggleClass('open');
        $(this).next().slideToggle();
    });

    // 메인 배너 슬라이드
    const $bannerItems = $('#bannerList li');
    const totalBanner = $bannerItems.length;
    let bannerPage = 0;

    $('#bannerNum em').text(totalBanner); // 배너 개수
    let slideShow = setInterval(bannerSlide, 5000); // 슬라이드 자동

    function bannerSlide() {
        $bannerItems.eq(bannerPage).stop().animate({'left': '-100%'});
        totalBanner - 1 > bannerPage ? bannerPage++ : bannerPage = 0;
        $bannerItems.eq(bannerPage).stop().css({'left': '100%'});
        $bannerItems.eq(bannerPage).stop().animate({'left': '0'});
        $('#bannerNum span').text(`${bannerPage+1}/`);
    }

    $('#bannerPlayBtn').click(function() {
        $(this).toggleClass('pause');
        if ($(this).hasClass('pause')) {
            clearInterval(slideShow);
        } else {
            slideShow = setInterval(bannerSlide, 5000);
        }
    });

    // 증명서발급 슬라이드
    const itemsPerPage = 6;
    const $slider = $('.clc-crt__list');
    const $items = $('.clc-crt__item');
    const $status = $('.clc-crt__btn');
    const totalItems = $items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = 0;

    function updateSlider() {
        const offset = -100 * currentPage;
        $slider.css('transform', `translateX(${offset}%)`);
    }

    $('#crtNextBtn').click(function() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateSlider();
            $status.removeClass('active');
            $status.eq(currentPage).addClass('active');
        }
    });

    $('#crtPrevBtn').click(function() {
        if (currentPage > 0) {
            currentPage--;
            updateSlider();
            $status.removeClass('active');
            $status.eq(currentPage).addClass('active');
        }
    });

    $status.click(function() {
        $status.removeClass('active');
        $(this).addClass('active');
        currentPage = $(this).index();
        updateSlider();
    });

    // 생애주기별 서비스
    const $hubTab = $('.hub-cyc__tabbtn');
    const $hubBlock = $('.hub-cyc__cntn');
    
    $hubTab.click(function() {
        $hubTab.removeClass('active');
        $hubBlock.removeClass('active');
        $(this).addClass('active');
        $hubBlock.eq($(this).index()).addClass('active');
    });

    // 탭버튼 공통
    $('.tab-btn').click(function() {
        $(this).parents('.tab').find('.tab-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.tab2__btn').click(function() {
        $(this).parents('.tab2').find('.tab2__btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.hub-mdm__tabbtn').click(function() {
        $(this).parents('.hub-mdm__tab').find('.hub-mdm__tabbtn').removeClass('active');
        $(this).addClass('active');
    });

    // 스포츠정보 슬라이드
    


});