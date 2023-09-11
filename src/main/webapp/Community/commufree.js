let commufree = document.getElementById("list1");

let listArr1 = new Array(10);
listArr1 = [
    {
        title : "오늘 점심 메뉴",
        vote : 12,
        writer : "운동하는 나무늘보",
        writedDate : "2023-09-06"
    },{
        title : "소개팅 가려는데 옷 좀 봐주십쇼ㅜㅠ",
        vote : 7,
        writer : "공대남",
        writedDate : "2023-09-06"
    },{
        title : "와이프한테 닌텐도 산거 걸린 썰 푼다.",
        vote : 25,
        writer : "하체부실",
        writedDate : "2023-09-06"
    },{
        title : "상남자 특",
        vote : 16,
        writer : "슈퍼맨",
        writedDate : "2023-09-06"
    },{
        title : "생선까스vs돈까스",
        vote : 31,
        writer : "김현주",
        writedDate : "2023-09-06"
    },{
        title : "김종국 런닝맨에서 한 인바디 결과",
        vote : 25,
        writer : "이건아",
        writedDate : "2023-09-06"
    },{
        title : "ㅁㄴㅇㄹ",
        vote : 2,
        writer : "asdf1234",
        writedDate : "2023-09-06"
    },{
        title : "헬창 두 명 애버랜드 갔다옴",
        vote : 19,
        writer : "근육메이드",
        writedDate : "2023-09-06"
    },{
        title : "김계란이 개업한 헬스장 최근 근황",
        vote : 11,
        writer : "김준수",
        writedDate : "2023-09-06"
    },{
        title : "역대 보디빌더 대회 1등 모음",
        vote : 23,
        writer : "이선왕",
        writedDate : "2023-09-06"
    },
]

let board1 = '';

listArr1.forEach((list, index) => {
    let hotStyle1 = index === 0 || index === 1 ? 'color: black;' : '';
    let titleId1 = `title-${index}`; // 고유한 id 생성
    let table1 = `
    <li class="line">
        <span id="redbutton" style="float:left; float:top;">
            ${index <= 2 ? `<button style=" background-color: orangered; color:white; 
            border:none; border-radius: 1px; font-size:15px; margin-right:10px;" onclick="handleButtonClick(${index})">Best</button>` : ''}
        </span>
        <div>
            <span id="${titleId1}" style="font-size:19px;${hotStyle1}"><b>${list.title}</b></span>
            <span id="vote" style="font-size:14px;">추천수 : ${list.vote}</span>
        </div>
        <div>
            <span id="writer" style="font-size:14px;">${list.writer}</span>
            <span id="date" style="font-size:14px;">${list.writedDate}</span>
        </div>
    </li>
    `;
    board1 += table1;
});

commufree.innerHTML = board1;
