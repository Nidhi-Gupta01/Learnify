const courses = {
  html: [
    { url: "https://www.youtube.com/embed/XmLOwJHFHf0?si=-lAoVjkWc5W6fAK1", title: "HTML Tutorial Part 01" },
    { url: "https://www.youtube.com/embed/v-xdY6VFcio?si=I6YyOiIjYggGyzPT", title: "HTML Tutorial Part 02" },
    { url: "https://www.youtube.com/embed/CetKwpx3t6g?si=Cv0sbnF5-r06A_Mg", title: "HTML Tutorial Part 03" },
    { url: "https://www.youtube.com/embed/QEoU5Kaz9lQ?si=MpNpIHgKCNiH7g4z", title: "HTML Tutorial Part 04" },
    { url: "https://www.youtube.com/embed/AdmLG2xhdvM?si=PnHkkxOO0TyJ4vi7", title: "HTML Tutorial Part 05" },
    { url: "https://www.youtube.com/embed/T_ca5aO3WN0?si=KNtkZzig_Zt47uSN", title: "HTML Tutorial Part 06" },
    { url: "https://www.youtube.com/embed/d2Tb9hd9pHM?si=tPb1yERPKKI0uhUU", title: "HTML Tutorial Part 07" },
    { url: "https://www.youtube.com/embed/MiJrcI4LXMA?si=RT9o63GIcFR9hR7G", title: "HTML Tutorial Part 08" },
    { url: "https://www.youtube.com/embed/I7LrS1z_WNA?si=cOUnukGky_2tr3Sj", title: "HTML Tutorial Part 09" },
    { url: "https://www.youtube.com/embed/-wMbf3qVNsc?si=1S8VHYIH0_9raeIm", title: "HTML Tutorial Part 10" },
    { url: "https://www.youtube.com/embed/DSRMCZwM3YE?si=RgdEzTlIl4Did6FL", title: "HTML Tutorial Part 11" },
    { url: "https://www.youtube.com/embed/LhWQlBdqaeM?si=gvJActg3R0Xxyus1", title: "HTML Tutorial Part 12" },
    { url: "https://www.youtube.com/embed/YR2fepUAp5c?si=5NY81qlWrha9wkMh", title: "HTML Tutorial Part 13" },
    { url: "https://www.youtube.com/embed/E_AExAmpq_o?si=zksh2Hzay6daZojx", title: "HTML Tutorial Part 14" },
    { url: "https://www.youtube.com/embed/pYSXmQCrxlw?si=dxicD4L5Ok0ZR2tq", title: "HTML Tutorial Part 15" },
  ],
  css: [
    { url: "https://www.youtube.com/embed/ua24185-rcw?si=HNEoUA0dYF0cDW0I", title: "CSS Tutorial Part 01" },
    { url: "https://www.youtube.com/embed/ArUL-He_AN0?si=jx8v09lJpz1DR1z3", title: "CSS Tutorial Part 02" },
    { url: "https://www.youtube.com/embed/oPPym7UaSIo?si=aNpDR79Qn5t-0ffo", title: "CSS Tutorial Part 03" },
    { url: "https://www.youtube.com/embed/buxedopZbKM?si=RCSPQiLhNHuGKFVk", title: "CSS Tutorial Part 04" },
    { url: "https://www.youtube.com/embed/5Gz7j4gDrXM?si=paCeTIYhBKgTDyJs", title: "CSS Tutorial Part 05" },
    { url: "https://www.youtube.com/embed/EEw5OJCsiDs?si=Mbx5WreMEFjEM6oq", title: "CSS Tutorial Part 06" },
    { url: "https://www.youtube.com/embed/2zcHiaHo4Jo?si=3Jor3vwNzBQalWoV", title: "CSS Tutorial Part 07" },
    { url: "https://www.youtube.com/embed/5koxb4JaDqc?si=_4E004IXPpkWt8hm", title: "CSS Tutorial Part 08" },
    { url: "https://www.youtube.com/embed/6G42rXal5-g?si=uEBOgnCVmOFP7cRx", title: "CSS Tutorial Part 09" },
    { url: "https://www.youtube.com/embed/3lAl7RNqp1c?si=1AAJeW7Ek0mj9kSb", title: "CSS Tutorial Part 10" },
    { url: "https://www.youtube.com/embed/OsPOBsclJLU?si=LdbMGY3Fz0EozGb1", title: "CSS Tutorial Part 11" },
    { url: "https://www.youtube.com/embed/OsPOBsclJLU?si=JtcfjmkBqJCwmA9h", title: "CSS Tutorial Part 12" },
    { url: "https://www.youtube.com/embed/YJtlXrzXXFk?si=Sff30PrOQCbLMytJ", title: "CSS Tutorial Part 13" },
    { url: "https://www.youtube.com/embed/Uzuq2FGxgK4?si=N1lIijXg9WwVxr2m", title: "CSS Tutorial Part 14" },
    { url: "https://www.youtube.com/embed/WTz4A8IdeEQ?si=HASrLPzBjfqA9Baa", title: "CSS Tutorial Part 15" },
  ],
  js: [
    { url: "https://www.youtube.com/embed/ajdRvxDWH4w?si=yWRekMVR1PYghBjV", title: "JavaScript Tutorial Part 01" },
    { url: "https://www.youtube.com/embed/Zg4-uSjxosE?si=UDt59-hFv4Txuz-b", title: "JavaScript Tutorial Part 02" },
    { url: "https://www.youtube.com/embed/UmRtFFSDSFo?si=CH8AQfiOrOHbhUN6", title: "JavaScript Tutorial Part 03" },
    { url: "https://www.youtube.com/embed/gFWhbjzowrM?si=NjX_u5Hzi86rdPGH", title: "JavaScript Tutorial Part 04" },
    { url: "https://www.youtube.com/embed/P0XMXqDGttU?si=MMxL7S3ORDzkatM0", title: "JavaScript Tutorial Part 05" },
    { url: "https://www.youtube.com/embed/7zcXPCt8Ck0?si=IN125_JWMJaJ9uQp", title: "JavaScript Tutorial Part 06" },
    { url: "https://www.youtube.com/embed/fXAGTOZ25H8?si=4c8BNYwkbCusWPwO", title: "JavaScript Tutorial Part 07" },
    { url: "https://www.youtube.com/embed/_i-uLJAh79U?si=WXqgJMDNnJVMib4x", title: "JavaScript Tutorial Part 08" },
    { url: "https://www.youtube.com/embed/_i-uLJAh79U?si=WXqgJMDNnJVMib4x", title: "JavaScript Tutorial Part 09" },
    { url: "https://www.youtube.com/embed/cEWLPtRhiio?si=HiWC29E4F_gY7oN3", title: "JavaScript Tutorial Part 10" },
    { url: "https://www.youtube.com/embed/d4PN2rJD98g?si=lea8D9eYNIu6eCjv", title: "JavaScript Tutorial Part 11" },
    { url: "https://www.youtube.com/embed/d4PN2rJD98g?si=3-mwRVryDLhqiZST", title: "JavaScript Tutorial Part 12" },
    { url: "https://www.youtube.com/embed/d4PN2rJD98g?si=3-mwRVryDLhqiZST", title: "JavaScript Tutorial Part 13" },
    { url: "https://www.youtube.com/embed/yGU9DJ5TI8I?si=1Vt6sBVbEmZDzgAw", title: "JavaScript Tutorial Part 14" },
    { url: "https://www.youtube.com/embed/OkFPMOudomg?si=izhIkP7QLSNWwnY1", title: "JavaScript Tutorial Part 15" },
  ],
  // Add other courses similarly...
  bootstrap: [

    { url: "https://www.youtube.com/embed/YQRmczOYIG0?si=YCzL8XyBGHwg8W4w", title: "Bootstrap Tutorial Part 01" },
    { url: "https://www.youtube.com/embed/iUCyU_U0J2E?si=SK256e2SQq_zq2Um", title: "Bootstrap Tutorial Part 02" },
    { url: "https://www.youtube.com/embed/ZZXGmoQ4PdI?si=6gz7f3uul4MAOnkj", title: "Bootstrap Tutorial Part 03" },
    { url: "https://www.youtube.com/embed/nCeHeA7IsvU?si=NPjTYOsI67G3ztlL", title: "Bootstrap Tutorial Part 04" },
    { url: "https://www.youtube.com/embed/Y6q8R-9y6a0?si=FCqEo6gLfWyrXTrt", title: "Bootstrap Tutorial Part 05" },
    { url: "https://www.youtube.com/embed/irfbn103AzE?si=j-ReXzA_ZmAwN3M1", title: "Bootstrap Tutorial Part 06" },
    { url: "https://www.youtube.com/embed/yCCIztB-S_k?si=uyz_lu5DfnjmXKCi", title: "Bootstrap Tutorial Part 07" },
    { url: "https://www.youtube.com/embed/7AT1X9Z41sA?si=8RYbpKXDxTJh67uv", title: "Bootstrap Tutorial Part 08" },
    { url: "https://www.youtube.com/embed/NRoET8-8cbw?si=7ckRkuhKmrWRkfCF", title: "Bootstrap Tutorial Part 09" },
    { url: "https://www.youtube.com/embed/cVThXv6hYW0?si=x3-xZZtLL1rRDQVx", title: "Bootstrap Tutorial Part 10" },
    { url: "https://www.youtube.com/embed/gwgeMole3gs?si=E4QnlM56mdAC8m0x", title: "Bootstrap Tutorial Part 11" },
    { url: "https://www.youtube.com/embed/rhvMRsE_6sY?si=9LfshcBmHXNeu7xt", title: "Bootstrap Tutorial Part 12" },
    { url: "https://www.youtube.com/embed/dKVX22GR7zQ?si=K5iRvyogqjhLRsnC", title: "Bootstrap Tutorial Part 13" },
    { url: "https://www.youtube.com/embed/WTrW-1JsDYE?si=lav6z2BKf5fQe-Kn", title: "Bootstrap Tutorial Part 14" },
    { url: "https://www.youtube.com/embed/tt5uUMQgzl0?si=knzTtKaXoXZ4lHVn", title: "Bootstrap Tutorial Part 15" },
    // Bootstrap videos
  ],
  jquery: [

    { url: "https://www.youtube.com/embed/cO4N0Tlh-I4?si=6GBiqvly9moIFGTU", title: "JQUERY Tutorial Part 01" },
    { url: "https://www.youtube.com/embed/TEN0Oi5H9Dk?si=k4JiuuX6Quh-LWCo", title: "JQUERY Tutorial Part 02" },
    { url: "https://www.youtube.com/embed/z-erXaTpRQA?si=B1MZDidPYuBjRs8y", title: "JQUERY Tutorial Part 03" },
    { url: "https://www.youtube.com/embed/_NBsgEr9DX0?si=EAA4moXVIXZ03zd_", title: "JQUERY Tutorial Part 04" },
    { url: "https://www.youtube.com/embed/oTlTp_7ikrQ?si=a4ky1yHusYbju3gZ", title: "JQUERY Tutorial Part 05" },
    { url: "https://www.youtube.com/embed/5RLqzydhMEY?si=grFh700ZTaQ-PNxs", title: "JQUERY Tutorial Part 06" },
    { url: "https://www.youtube.com/embed/bgaE60t1r_0?si=AqzIVsIm983kmJXz", title: "JQUERY Tutorial Part 07" },
    { url: "https://www.youtube.com/embed/rUljWnL1FGc?si=Fy6xbA0W7Fm1vvwf", title: "JQUERY Tutorial Part 08" },
    { url: "https://www.youtube.com/embed/7fkLg2ItBLw?si=wf8teaspiyujbe-U", title: "JQUERY Tutorial Part 09" },
    { url: "https://www.youtube.com/embed/O5iC91j6NXU?si=98CVCSTNfxNQ9PF5", title: "JQUERY Tutorial Part 10" },
    { url: "https://www.youtube.com/embed/wa77mhI1BJw?si=0fwKqIGMwXYe5jgZ", title: "JQUERY Tutorial Part 11" },
    { url: "https://www.youtube.com/embed/wa77mhI1BJw?si=bpQRymgU1lRqcQe1", title: "JQUERY Tutorial Part 12" },
    { url: "https://www.youtube.com/embed/IrMt5AypN5A?si=nuTqK6OHAj6N6JXy", title: "JQUERY Tutorial Part 13" },
    { url: "https://www.youtube.com/embed/KHwNcwpES1Y?si=ciVuo7UbqIIJ4OyN", title: "JQUERY Tutorial Part 14" },
    { url: "https://www.youtube.com/embed/FYHxIdGwkmw?si=XgjBujDa9Cq_iESp", title: "JQUERY Tutorial Part 15" },
  ],
  sass: [

    { url: "https://www.youtube.com/embed/9ggoO2o1WJA?si=4pI6_RHOpe1bNWmG", title: "SASS Tutorial Part 01" },
    { url: "https://www.youtube.com/embed/sIP587Cqn2E?si=lAf_iVnXoiuzXESj", title: "SASS Tutorial Part 02" },
    { url: "https://www.youtube.com/embed/SvpxhTwvwKA?si=oN5ihU7jqQf5vUzA", title: "SASS Tutorial Part 03" },
    { url: "https://www.youtube.com/embed/HfoEC9FUcVY?si=8Z5jeDkUok2jXFJ9", title: "SASS Tutorial Part 04" },
    { url: "https://www.youtube.com/embed/_XU9PaUuSyo?si=m0J0CAL2QZCWS-wm", title: "SASS Tutorial Part 05" },
    { url: "https://www.youtube.com/embed/appdXwfbxj0?si=415oGzVfxRnakVIC", title: "SASS Tutorial Part 06" },
    { url: "https://www.youtube.com/embed/vKREH66hEEU?si=Xi3tXsmB9praF8xq", title: "SASS Tutorial Part 07" },
    { url: "https://www.youtube.com/embed/xFd8Ypnfvsk?si=hJlLJHfg4Bj07yD_", title: "SASS Tutorial Part 08" },
    { url: "https://www.youtube.com/embed/WV2vHMYONGE?si=XVDb3Ovleks4c-VE", title: "SASS Tutorial Part 09" },
    { url: "https://www.youtube.com/embed/W_ASKnWPmqk?si=cO5MEu9688NY1zfQ", title: "SASS Tutorial Part 10" },
    { url: "https://www.youtube.com/embed/ZZo0xrmc0h8?si=k_oTPvJo4b3mWBdC", title: "SASS Tutorial Part 11" },
    { url: "https://www.youtube.com/embed/E7FFsfic6FY?si=hDw6S6GBUCZpP8DV", title: "SASS Tutorial Part 12" },
    { url: "https://www.youtube.com/embed/UfZafwfghTY?si=p72M4BzHfL4nUoY_", title: "SASS Tutorial Part 13" },
    { url: "https://www.youtube.com/embed/ecbTUHakmSY?si=oEYx7ziHPN4OxS2j", title: "SASS Tutorial Part 14" },
    { url: "https://www.youtube.com/embed/em_GPqmbhj0?si=x7CgXMyNUJ8S6l6B", title: "SASS Tutorial Part 15" },
  ],
  php: [

    { url: "https://www.youtube.com/embed/at19OmH2Bg4?si=8AUm4F0X4bnPLNey", title: "PHP Tutorial Part 01" },
    { url: "https://www.youtube.com/embed/PaDgry5QAt4?si=eD0S2efR1vc-1fqj", title: "PHP Tutorial Part 02" },
    { url: "https://www.youtube.com/embed/4kFg2EqEIv8?si=2KZUQfsTRx441dso", title: "PHP Tutorial Part 03" },
    { url: "https://www.youtube.com/embed/c1vbmGZLy9Y?si=dDTApIGv6XMSekPJ", title: "PHP Tutorial Part 04" },
    { url: "https://www.youtube.com/embed/et5jScMSNXc?si=4V0HFWHCDN77iinb", title: "PHP Tutorial Part 05" },
    { url: "https://www.youtube.com/embed/Wr6R3nQfPts?si=HhSxA48WfS2to3hU", title: "PHP Tutorial Part 06" },
    { url: "https://www.youtube.com/embed/OxkPmOuxMyw?si=uzxaPOobo0BK5B5l", title: "PHP Tutorial Part 07" },
    { url: "https://www.youtube.com/embed/mYnGMQS_fUg?si=Cy0BtEd96Y4X-tsp", title: "PHP Tutorial Part 08" },
    { url: "https://www.youtube.com/embed/xLc70TTz88Q?si=jDee60KIOR-MQNId", title: "PHP Tutorial Part 09" },
    { url: "https://www.youtube.com/embed/EBrUfyRO3Y0?si=Sqg99gJzFlbWAX8O", title: "PHP Tutorial Part 10" },
    { url: "https://www.youtube.com/embed/tiOvat39AI8?si=NQl0meRd8meKRR2P", title: "PHP Tutorial Part 11" },
    { url: "https://www.youtube.com/embed/86tJIr6qpNQ?si=qXIgzi48AJTUThVS", title: "PHP Tutorial Part 12" },
    { url: "https://www.youtube.com/embed/GVGolpfz-ms?si=nSN38g5lWUFwD8WQ", title: "PHP Tutorial Part 13" },
    { url: "https://www.youtube.com/embed/LMhQAErF8J0?si=E2JEm0bGdMmsVl1c", title: "PHP Tutorial Part 14" },
    { url: "https://www.youtube.com/embed/sFjRRRJ-j8Y?si=banDQL8BDviLYein", title: "PHP Tutorial Part 15" },
  ],
  mysql: [

    { url: "https://www.youtube.com/embed/nnBMsGrwuUE?si=ZgJbK5ucvqfCZb4B", title: "MysqlTutorial Part 01" },
    { url: "https://www.youtube.com/embed/KuoyaktNrb0?si=ixQ_9o2-GsDawU0r", title: "MysqlTutorial Part 02" },
    { url: "https://www.youtube.com/embed/uIcGi4jK5gk?si=PLK3DphX8JKxNEfh", title: "MysqlTutorial Part 03" },
    { url: "https://www.youtube.com/embed/8_iQLPPVboM?si=AaD_2gWnbxhHEhYt", title: "MysqlTutorial Part 04" },
    { url: "https://www.youtube.com/embed/yAqkH7-32bQ?si=P1HTA6jNvYqD5rmG", title: "MysqlTutorial Part 05" },
    { url: "https://www.youtube.com/embed/LzAzbVD3Qtw?si=snxXCvgTGqz3UcAQ", title: "MysqlTutorial Part 06" },
    { url: "https://www.youtube.com/embed/QRIN7KS_R2Y?si=WfJ692MHaYY1YmiQ", title: "MysqlTutorial Part 07" },
    { url: "https://www.youtube.com/embed/UdHcV7Q-q7Y?si=qpPiKaNWpOprqwyo", title: "MysqlTutorial Part 08" },
    { url: "https://www.youtube.com/embed/2LzowokzgmE?si=mKSvHoJhme2_13OS", title: "MysqlTutorial Part 09" },
    { url: "https://www.youtube.com/embed/7x83hkFLyHM?si=f6rg6cXMK9HC6ZwY", title: "MysqlTutorial Part 10" },
    { url: "https://www.youtube.com/embed/wL4k3jl9TuQ?si=sWLvSuc44jBhcrO0", title: "MysqlTutorial Part 11" },
    { url: "https://www.youtube.com/embed/_tk6YuxzNlM?si=0SyzC7YFDAvL5CsV", title: "MysqlTutorial Part 12" },
    { url: "https://www.youtube.com/embed/xtb2DxpEfX0?si=l9mkjwULd9muqlSQ", title: "MysqlTutorial Part 13" },
    { url: "https://www.youtube.com/embed/4H0rrb0ooB0?si=eZKMFR_HKjmfOo7w", title: "MysqlTutorial Part 14" },
    { url: "https://www.youtube.com/embed/QAHrra9npmA?si=u19vbXsWdbRYTkcO", title: "MysqlTutorial Part 15" },
  ],
  react: [

    { url: "https://www.youtube.com/embed/vz1RlUyrc3w?si=rIl0r9ElwvsSh6MG", title: "React Tutorial Part 01" },
    { url: "https://www.youtube.com/embed/k3KqQvywToE?si=7O6dsjgeAAyARUH_", title: "React Tutorial Part 02" },
    { url: "https://www.youtube.com/embed/yNbnA5pryMg?si=emUpJdiZjyprf1l-", title: "React Tutorial Part 03" },
    { url: "https://www.youtube.com/embed/kAOuj6o7Kxs?si=QjZorbQ28OTAnBUf", title: "React Tutorial Part 04" },
    { url: "https://www.youtube.com/embed/lI7IIOWM0Mo?si=jTHvQwAUOz_v0M7-", title: "React Tutorial Part 05" },
    { url: "https://www.youtube.com/embed/MPCVGFvgVEQ?si=ec4-1LkoaCD6YOV0", title: "React Tutorial Part 06" },
    { url: "https://www.youtube.com/embed/bB6707XzCNc?si=Vm0A3AljIGYqSj4A", title: "React Tutorial Part 07" },
    { url: "https://www.youtube.com/embed/tOYkV6Yhrhs?si=Wvob6hEFh4OQTL_I", title: "React Tutorial Part 08" },
    { url: "https://www.youtube.com/embed/_lJ3KNMue3w?si=MchEzhKRfLDhhny5", title: "React Tutorial Part 09" },
    { url: "https://www.youtube.com/embed/Lt4vy8hfc-s?si=Sp00ltdmj6hHTDYv", title: "React Tutorial Part 10" },
    { url: "https://www.youtube.com/embed/AFDYnd-XPa8?si=VjZ4CKUD8MAhaxvN", title: "React Tutorial Part 11" },
    { url: "https://www.youtube.com/embed/VJov5QWEKE4?si=KpwgmbnbmHDn6NMb", title: "React Tutorial Part 12" },
    { url: "https://www.youtube.com/embed/JQVBGtZMqgU?si=BWw-rEXvD8aYHtRC", title: "React Tutorial Part 13" },
    { url: "https://www.youtube.com/embed/6KQeopPE36I?si=VjJblo-XA62ugJQr", title: "React Tutorial Part 14" },
    { url: "https://www.youtube.com/embed/1i04-A7kfFI?si=rsqrRD4nAwxZEpuf", title: "React Tutorial Part 15" },
  ]
};


// Get current video index and course from URL
// Get current video index and course from URL
const params = new URLSearchParams(window.location.search);
const courseName = params.get("course") || "html";
let currentVideoIndex = parseInt(params.get("index")) || 0;
const course = courses[courseName] || courses.html;

// DOM elements
const iframe = document.getElementById("video-player");
const titleEl = document.getElementById("video-title");
const markBtn = document.getElementById("mark-complete");
const nextBtn = document.getElementById("next-video");
const finalTest = document.getElementById("final-test");

// Load video
function loadVideo(course, index) {
  if (course[index]) {
    const video = course[index];
    iframe.src = video.url + "&autoplay=1";
    titleEl.textContent = video.title;

    // Reset button state
    markBtn.disabled = false;
    markBtn.textContent = "Mark Complete ✔";
    markBtn.classList.remove("completed");
    nextBtn.style.display = "none";
    finalTest.style.display = "none";

    // Check if last video
    if (index === course.length - 1) {
      finalTest.style.display = "block";
      // Use absolute path to avoid resolving to /watch/test.html
      finalTest.querySelector('a').href = `/test/?course=${courseName}`;
    }
  }
}

// Check if video already completed
function checkCompleted() {
  let completedVideos = JSON.parse(localStorage.getItem(`completed_${courseName}`)) || [];
  if (completedVideos.includes(currentVideoIndex)) {
    markBtn.disabled = true;
    markBtn.textContent = "Completed ✔";
    markBtn.classList.add("completed");

    if (currentVideoIndex < course.length - 1) {
      nextBtn.style.display = "inline-block";
      // Use absolute path to avoid resolving to /watch/watch.html
      nextBtn.href = `/watch/?course=${courseName}&index=${currentVideoIndex + 1}`;
    }
  }
}

// Mark complete button event
markBtn.addEventListener("click", () => {
  markBtn.disabled = true;
  markBtn.textContent = "Completed ✔";
  markBtn.classList.add("completed");

  let completedVideos = JSON.parse(localStorage.getItem(`completed_${courseName}`)) || [];
  if (!completedVideos.includes(currentVideoIndex)) {
    completedVideos.push(currentVideoIndex);
    localStorage.setItem(`completed_${courseName}`, JSON.stringify(completedVideos));
  }

  if (currentVideoIndex < course.length - 1) {
    nextBtn.style.display = "inline-block";
    // Use absolute path to avoid resolving to /watch/watch.html
    nextBtn.href = `/watch/?course=${courseName}&index=${currentVideoIndex + 1}`;
  }
});

// Initialize
loadVideo(course, currentVideoIndex);
checkCompleted();
