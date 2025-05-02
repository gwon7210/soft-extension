document.getElementById('softenButton').addEventListener('click', async () => {
  // 현재 활성화된 탭 가져오기
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  // 콘텐츠 스크립트에 메시지 전송
  chrome.tabs.sendMessage(tab.id, { action: 'soften' }, (response) => {
    if (response && response.status === 'success') {
      console.log('페이지가 부드럽게 변경되었습니다.');
    }
  });
}); 