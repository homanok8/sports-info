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
    const $sprItems = $('.spr__list');
    const totalSpr = $sprItems.length;
    let sprPage = 0;

    $('#sprNextBtn').click(function() {
        if (sprPage < totalSpr - 1) {
            $sprItems.eq(sprPage).stop().animate({'left': '-100%'});
            sprPage++;
            $sprItems.eq(sprPage).stop().css({'left': '110%'});
            $sprItems.eq(sprPage).stop().animate({'left': '3rem'});
            $('.spr__stts-btn').removeClass('active');
            $('.spr__stts-btn').eq(sprPage).addClass('active');
        }
        
    });

    $('#sprPrevBtn').click(function() {
        if (sprPage > 0) {
            $sprItems.eq(sprPage).stop().animate({'left': '110%'});
            sprPage--;
            $sprItems.eq(sprPage).stop().css({'left': '-100%'});
            $sprItems.eq(sprPage).stop().animate({'left': '3rem'});
            $('.spr__stts-btn').removeClass('active');
            $('.spr__stts-btn').eq(sprPage).addClass('active');
        }
    });

    $('.spr__stts-btn').click(function() {
        $sprItems.eq(sprPage).stop().animate({'left': '-100%'});
        sprPage = $(this).index();
        $sprItems.eq(sprPage).stop().css({'left': '110%'});
        $sprItems.eq(sprPage).stop().animate({'left': '3rem'});
        $('.spr__stts-btn').removeClass('active');
        $('.spr__stts-btn').eq(sprPage).addClass('active');
    });

    // 스포츠 통계 등록 현황
    const chrtItemsPerPage = 3;
    const $chrtSlider = $('.chrt__list');
    const $chrtItems = $('.chrt__item');
    const chrtTotalItems = $chrtItems.length;
    const chrtTotalPages = Math.ceil(chrtTotalItems / chrtItemsPerPage);
    let chrtPage = 0;

    function chrtSlider() {
        const offset = -100 * chrtPage;
        $chrtSlider.css('transform', `translateX(${offset}%)`);
    }

    $('#chrtNextBtn').click(function() {
        if (chrtPage < chrtTotalPages - 1) {
            chrtPage++;
            chrtSlider();
        }
    });

    $('#chrtPrevBtn').click(function() {
        if (chrtPage > 0) {
            chrtPage--;
            chrtSlider();
        }
    });

    // 증명서 발급안내 탭 
    $('.tab3__btn').click(function() {
        let elIndex = $(this).index();

        $('.tab3__btn').removeClass('active');
        $(this).addClass('active');
        $('article').removeClass('active');
        if (elIndex === 0) {
            $('.chc').addClass('active');
        } else {
            $('.prcd').addClass('active');
        }

        $(window).scrollTop(0);
    });

    $('.prcd__btn').click(function() {
        let dataNum = parseInt($(this).attr('data-number'));
        $('article').removeClass('active');
        $('.mns').addClass('active');
        $('.mns__tab button').removeClass('active');
        $('.mns__block').removeClass('active');
        $('.mns__tab button').eq(dataNum - 1).addClass('active');
        $('.mns__block').eq(dataNum - 1).addClass('active');

        $(window).scrollTop(0);
    });

    $('.mns__tab button').click(function() {
        let elIndex = $(this).index();

        $('.mns__tab button').removeClass('active');
        $(this).addClass('active');
        $('.mns__block').removeClass('active');
        $('.mns__block').eq(elIndex).addClass('active');

        $(window).scrollTop(0);
    });

    // 이미지형, 리스트형
    $('.chcList').click(function() {
        $('.chc__btn').removeClass('active');
        $('.chcList').addClass('active');
        $('.chc__list').removeClass('chc__list--img');
    });

    $('.chcImage').click(function() {
        $('.chc__btn').removeClass('active');
        $('.chcImage').addClass('active');
        $('.chc__list').addClass('chc__list--img');
    });

    // 종목선택 팝업 
    $('.chc__link').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        const offset = $(this).offset();
        const top = offset.top - 50;
        const left = offset.left + 90;
        const right = offset.left - $('.game__pop').outerWidth() + 50;
        const currentNum = $(this).parent().index() + 1;
        const x = currentNum % 6;
        const y = currentNum % 4;
        const text = $(this).find('span').text();

        $('.game__pop').addClass('on');
        $('.game__tit span b').text(text);

        if ($(this).parents('ul').hasClass('chc__list--img')) { // 이미지형 리스트일 경우
            if (x === 1 || x === 2 || x === 3) {
                $('.game__pop').css({
                    top: top,
                    left: left,
                });
            } else {
                $('.game__pop').css({
                    top: top,
                    left: right
                });
            }
        } else {
            if (y === 1 || y === 2) {
                $('.game__pop').css({
                    top: top,
                    left: left,
                });
            } else {
                $('.game__pop').css({
                    top: top,
                    left: right,
                });
            }
        }
        

    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.game__pop, .chc__link').length) {
            $('.game__pop').removeClass('on');
        }
    });


});

// datepicker
$.datepicker.setDefaults({
    dateFormat: "yy-mm-dd",
    dayNames: ["S", "M", "T", "W", "T", "F", "S"],
    dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    prevText: "이전",
    nextText: "다음",
    currentText: "오늘",
    closeText: "닫기",
    changeMonth: true,
    changeYear: true,
    showOn: "both",
    buttonImage: 'images/icons/calendar-gray-icon.png',
    buttonImageOnly: true,
    beforeShow: function(input, inst) {
        setTimeout(() => {
            const date = $(input).datepicker("getDate") || new Date();
            updateCustomTitle(date.getFullYear(), date.getMonth() + 1);
        }, 0);
    },
    onChangeMonthYear: function(year, month, inst) {
        setTimeout(() => {
            updateCustomTitle(year, month);
        }, 0);
    }
});

function updateCustomTitle(year, month) {
    const monthNames = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    const customText = `${year}. ${monthNames[month - 1]}`;
    $('.ui-datepicker-title .custom-title').remove(); // 중복 방지
    $('.ui-datepicker-title').prepend(`<div class="custom-title">${customText}</div>`);
}

$(function() {
    $('.datepicker').datepicker();
});

// selectbox 커스텀
$(document).ready(function () {
    $('.selectbox').each(function () {
        const $select = $(this);
        const options = $select.find('option');
        const selectedText = options.filter(':selected').text() || options.eq(0).text();
        const $wrapper = $('<div class="custom-select-wrapper"></div>');
        const $customSelect = $(`
            <div class="custom-select">
                <div class="custom-select-trigger">${selectedText}</div>
                <div class="custom-options"></div>
            </div>
        `);

        // 옵션 넣기
        options.each(function () {
            const value = $(this).val();
            const text = $(this).text();
            const $option = $(`<span class="custom-option" data-value="${value}">${text}</span>`);
            $customSelect.find('.custom-options').append($option);
        });

        // select 숨기고 커스텀 셀렉트 추가
        $select.hide().after($wrapper);
        $wrapper.append($customSelect);

        // 트리거 클릭 시 열기/닫기
        $customSelect.find('.custom-select-trigger').on('click', function () {
            $customSelect.toggleClass('open');
        });

        // 옵션 선택
        $customSelect.find('.custom-option').on('click', function () {
            const value = $(this).data('value');
            const text = $(this).text();

            $customSelect.find('.custom-select-trigger').text(text);
            $select.val(value).trigger('change');
            $customSelect.removeClass('open');
        });
    });

    // 외부 클릭 시 드롭다운 닫기
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.custom-select').length) {
            $('.custom-select').removeClass('open');
        }
    });

});