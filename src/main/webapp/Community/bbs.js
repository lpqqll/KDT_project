let bbs = document.getElementById("list");

window.listArr = new Array(10);
listArr = [
    {
        title : "이 드립 이해하면 상위 1%ㅋㅋㅋㅋ",
        vote : 40,
        writer : "나는 슈퍼맨",
        writedDate : "2023-09-06"
    },{
        title : " 왕이 넘어지면?",
        vote : 33,
        writer : "아재개그러버",
        writedDate : "2023-09-06"
    },{
        title : "헬스기구 웃기게 사용하는 법",
        vote : 32,
        writer : "근육맨",
        writedDate : "2023-09-06"
    },{
        title : "MZ 용어 모음",
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
        title : "아ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
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
for (let index = 0; index < listArr.length; index++) {
    let list = listArr[index];
    let hotStyle = index === 0 || index === 1 ? 'color: black;' : '';
    let titleId = `title-${index}`; // 고유한 id 생성
    let table = `
    <li class="line">
    	<span id=redbutton style="float:left; float:top;" >
    		${index <= 2 ? `<button style=" background-color: orangered; color:white; 
    		border:none; border-radius: 1px; font-size:15px; margin-right:10px;" onclick="handleButtonClick(${index})">Best</button>` : ''}
    	</span>
        <div>
   			<span id="${titleId}" style="font-size:19px;"><b>${list.title}</b></span>  			
    		<span id="vote" style="font-size:14px;">추천수 : ${list.vote}</span>
		</div>
		
        <div>
            <span id="writer" style="font-size:14px;">${list.writer}</span>
            <span id="date" style="font-size:14px;">${list.writedDate}</span>
        </div>
        
    </li>
    `;
    board += table;
}

bbs.innerHTML = board;
