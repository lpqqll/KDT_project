let commutoday = document.getElementById("list3");

let listArr3 = new Array(10);
listArr3 = [
    {
        title : "9/6 오.운.완",
        vote : 12,
        writer : "민수아빠",
        writedDate : "2023-09-06"
    },{
        title : "오늘도 인증합니다.",
        vote : 7,
        writer : "김현주",
        writedDate : "2023-09-06"
    },{
        title : "결국 와버렸다...",
        vote : 25,
        writer : "근육킹",
        writedDate : "2023-09-06"
    },{
        title : "오운완 인증",
        vote : 16,
        writer : "나는 슈퍼맨",
        writedDate : "2023-09-06"
    },{
        title : "41번째 오.운.완",
        vote : 31,
        writer : "김현주",
        writedDate : "2023-09-06"
    },{
        title : "오늘은 하체 하는 날~",
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

let board3 = '';
listArr3.forEach(list => {
    let table3 = `
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
    board3 += table3;
});

commutoday.innerHTML = board3;
