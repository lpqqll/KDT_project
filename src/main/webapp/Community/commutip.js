let commutip = document.getElementById("list2");

let listArr2 = new Array(10);
listArr2 = [
    {
        title : "프로틴 선택시 꿀팁",
        vote : 54,
        writer : "민수아빠",
        writedDate : "2023-09-06"
    },{
        title : "벌크업에 좋은 식단",
        vote : 47,
        writer : "김현주",
        writedDate : "2023-09-06"
    },{
        title : "헬린이들 필독",
        vote : 41,
        writer : "근육킹",
        writedDate : "2023-09-06"
    },{
        title : "땀냄새 제거에 좋은 데오드란트 추천",
        vote : 16,
        writer : "나는 슈퍼맨",
        writedDate : "2023-09-06"
    },{
        title : "싸고 퀄 좋은 닭가슴살 판매 사이트",
        vote : 31,
        writer : "김현주",
        writedDate : "2023-09-06"
    },{
        title : "너도 할 수 있다! 6주만에 복근 만들기",
        vote : 25,
        writer : "김계란",
        writedDate : "2023-09-06"
    },{
        title : "김종국 홈짐 꿀팁",
        vote : 17,
        writer : "맥주통",
        writedDate : "2023-09-06"
    },{
        title : "덩치 키우고 싶은 멸치들 꿀팁 알려준다.",
        vote : 19,
        writer : "근육메이드",
        writedDate : "2023-09-06"
    },{
        title : "헬스 기구 별 올바른 사용법",
        vote : 11,
        writer : "나나7",
        writedDate : "2023-09-06"
    },{
        title : "(광고x)운동할 때 입기 좋은 기능성 옷 추천",
        vote : 23,
        writer : "이선왕",
        writedDate : "2023-09-06"
    },
]

var targetIndex = 1;

var linkElement = document.createElement("a");
linkElement.href = "communityPost.html";
linkElement.textContent = listArr2[targetIndex];

listArr[targetIndex] = linkElement;

let board2 = '';

listArr2.forEach((list, index) => {
    let titleId2 = `title-${index}`; // 고유한 id 생성
    let table2 = `
    <li class="line">
        <span id="redbutton" style="float:left; float:top;">
            ${index <= 2 ? `<button style="background-color: orangered; color:white; 
            border:none; border-radius: 1px; font-size:15px; margin-right:10px;" onclick="handleButtonClick(${index})">Best</button>` : ''}
        </span>
        <div>
            <span id="${titleId2}" style="font-size:19px;"><b><a href="communityPost.html"style="color:black; text-decoration-line: none; ">${list.title}</a></b></span>
            <span id="vote" style="font-size:14px;">추천수 : ${list.vote}</span>
        </div>
        <div>
            <span id="writer" style="font-size:14px;">${list.writer}</span>
            <span id="date" style="font-size:14px;">${list.writedDate}</span>
        </div>
    </li>
    `;
    board2 += table2;
});

commutip.innerHTML = board2;
