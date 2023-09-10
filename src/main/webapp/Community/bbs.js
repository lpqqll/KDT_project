let bbs = document.getElementById("list");

let listArr = new Array(10);
listArr = [
    {
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
        title : "프로틴 유머",
        vote : 20,
        writer : "이건아",
        writedDate : "2023-09-06"
    },
]

let board = '';
listArr.forEach(list => {
    let table = `
    <li class="line">
        <div>
            <span id="title">${list.title}</span>
            <span id="vote">추천수 : ${list.vote}</span>
        </div>
        <div>
            <span id="writer">${list.writer}</span>
            <span id="date">${list.writedDate}</span>
        </div>
    </li>
`;
    board += table;
});

bbs.innerHTML = board;