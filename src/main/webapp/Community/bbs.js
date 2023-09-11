let bbs = document.getElementById("list");

let listArr = new Array(10);
listArr = [
    {
        title : "ㅋㅋㅋㅋ",
        vote : 20,
        writer : "나는 슈퍼맨",
        writedDate : "2023-09-06"
    },{
        title : "왕이 넘어지면?",
        vote : 15,
        writer : "아재개그러버",
        writedDate : "2023-09-06"
    },{
        title : "ㅇwㅇ",
        vote : 12,
        writer : "근육맨",
        writedDate : "2023-09-06"
    },{
        title : "ㅋㅋㅋㅋ",
        vote : 20,
        writer : "나는 슈퍼맨",
        writedDate : "2023-09-06"
    },{
        title : "헬창놈들 파이팅",
        vote : 15,
        writer : "채이스내",
        writedDate : "2023-09-06"
    },{
        title : "프로틴 유머",
        vote : 20,
        writer : "이건아",
        writedDate : "2023-09-06"
    },{
        title : "ㅋㅋㅋㅋ",
        vote : 20,
        writer : "나는 슈퍼맨",
        writedDate : "2023-09-06"
    },{
        title : "운동하다 바지 찢어졌다.",
        vote : 15,
        writer : "루돌프",
        writedDate : "2023-09-06"
    },{
        title : "헬창만 이해할 수 있음",
        vote : 31,
        writer : "김준수",
        writedDate : "2023-09-06"
    },{
        title : "님들 이거 아심?",
        vote : 25,
        writer : "이선왕",
        writedDate : "2023-09-06"
    },
]

let board = '';
listArr.forEach(list => {
    let table = `
    <li class="line">
        <div>
            <span id="title" style="font-size:19px;"><b>${list.title}</b></span>
            <span id="vote" style="font-size:14px;">추천수 : ${list.vote}</span>
        </div>
        <div>
            <span id="writer" style="font-size:14px;">${list.writer}</span>
            <span id="date" style="font-size:14px;">${list.writedDate}</span>
        </div>
    </li>
`;
    board += table;
});

bbs.innerHTML = board;