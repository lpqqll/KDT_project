function a1(){

let commufree = document.getElementById("list5");

let listArr5 = new Array(4);
listArr5 = [
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
    },
]

let board5 = '';
listArr5.forEach(list => {
    let table5 = `
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
    board5 += table5;
});

commufree.innerHTML = board5;
}

/////////////////////
function a2(){
let bbs = document.getElementById("list6");

window.listArr = new Array(4);
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
    },
]

let board6= '';
listArr.forEach(list => {
    let table6 = `
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
    board6 += table6;
});

bbs.innerHTML = board6;
}
////////////////

function a3(){
let commutip = document.getElementById("list7");

window.listArr7 = new Array(4);
listArr7 = [
    {
        title : "프로틴 선택시 꿀팁",
        vote : 12,
        writer : "민수아빠",
        writedDate : "2023-09-06"
    },{
        title : "벌크업에 좋은 식단",
        vote : 7,
        writer : "김현주",
        writedDate : "2023-09-06"
    },{
        title : "헬린이들 필독",
        vote : 25,
        writer : "근육킹",
        writedDate : "2023-09-06"
    },{
        title : "땀냄새 제거에 좋은 데오드란트 추천",
        vote : 16,
        writer : "나는 슈퍼맨",
        writedDate : "2023-09-06"
    },
]

let board7 = '';
listArr7.forEach(list => {
    let table7 = `
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
    board7 += table7;
});

commutip.innerHTML = board7;
}
//////////////////////////////////
function a4(){
	let commutoday = document.getElementById("list8");

let listArr8 = new Array(4);
listArr8 = [
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
    },
]

let board8 = '';
listArr8.forEach(list => {
    let table8 = `
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
    board8 += table8;
});

commutoday.innerHTML = board8;
}

function a5(){
	let commubodyking = document.getElementById("list9");

let listArr9 = new Array(4);
listArr9 = [
    {
        title : "제 등근육 보실?",
        vote : 17,
        writer : "민수아빠",
        writedDate : "2023-09-06"
    },{
        title : "헬스 3년차 몸 변화",
        vote : 12,
        writer : "김현주",
        writedDate : "2023-09-06"
    },{
        title : "복근득근",
        vote : 16,
        writer : "근육킹",
        writedDate : "2023-09-06"
    },{
        title : "멸치 인증",
        vote : 2,
        writer : "나는 슈퍼맨",
        writedDate : "2023-09-06"
    },
]

let board9 = '';
listArr9.forEach(list => {
    let table9 = `
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
    board9 += table9;
});

commubodyking.innerHTML = board9;
}