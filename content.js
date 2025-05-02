// 페이지의 모든 이미지와 비디오에 부드러운 효과 적용
function softenPage() {
  // 모든 이미지에 필터 적용
  const images = document.getElementsByTagName('img');
  for (let img of images) {
    img.style.filter = 'blur(1px)';
    img.style.transition = 'filter 0.3s ease';
  }

  // 모든 비디오에 필터 적용
  const videos = document.getElementsByTagName('video');
  for (let video of videos) {
    video.style.filter = 'blur(1px)';
    video.style.transition = 'filter 0.3s ease';
  }

  // 페이지 내 텍스트 치환
  replaceText(document.body);
}

// 페이지 내 모든 텍스트에서 '박지원'을 '진호준'으로 바꿔주는 함수
function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(/박지원/g, '진호준');
  } else {
    for (let child of node.childNodes) {
      replaceText(child);
    }
  }
}

// 메시지 리스너 추가
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'soften') {
    softenPage();
    sendResponse({status: 'success'});
  }
}); 