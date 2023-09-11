let commubodyking = document.getElementById("list4");

let listArr4 = new Array(10);
listArr4 = [
    {
        title : "제 등근육 보실?",
        vote : 12,
        writer : "민수아빠",
        writedDate : "2023-09-06"
    },{
        title : "헬스 3년차 몸 변화",
        vote : 7,
        writer : "김현주",
        writedDate : "2023-09-06"
    },{
        title : "복근득근",
        vote : 25,
        writer : "근육킹",
        writedDate : "2023-09-06"
    },{
        title : "멸치 인증",
        vote : 16,
        writer : "나는 슈퍼맨",
        writedDate : "2023-09-06"
    },{
        title : "삼두 인증",
        vote : 31,
        writer : "김현주",
        writedDate : "2023-09-06"
    },{
        title : "바프 찍었습니다.",
        vote : 25,
        writer : "김계란",
        writedDate : "2023-09-06"
    },{
        title : "인증합니다.",
        vote : 2,
        writer : "강남헬스트레이너",
        writedDate : "2023-09-06"
    },{
        title : "오늘은 모닝 헬스장",
        vote : 19,
        writer : "근육메이드",
        writedDate : "2023-09-06"
    },{
        title : "크로스핏 1일차 인증 + 후기",
        vote : 11,
        writer : "나나7",
        writedDate : "2023-09-06"
    },{
        title : "오늘도 파이팅! 오!운!완!",
        vote : 23,
        writer : "이선왕",
        writedDate : "2023-09-06"
    },
]

let board4 = '';
listArr4.forEach(list => {
    let table4 = `
    <li class="line">
    	<img src="img/mabi.png" style="float:left; margin-left:20px; width:50px; height:50px;">
        <div>
        
            <span id="title" style="font-size:19px; margin-left:20px;"><b>${list.title}</b></span>
            <span id="vote" style="font-size:14px;">추천수 : ${list.vote}</span>
        </div>
        <div>
            <span id="writer" style="font-size:14px; margin-left:20px;">${list.writer}</span>
            <span id="date" style="font-size:14px;">${list.writedDate}</span>
        </div>
    </li>
`;
    board4 += table4;
});

commubodyking.innerHTML = board4;