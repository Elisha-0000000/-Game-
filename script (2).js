const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = '😀';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

// 检查胜利条件
const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`玩家 ${board[a]} 獲勝!`);
            isGameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        alert('平局!');
        isGameActive = false;
    }
};

// 处理点击事件
const handleClick = (e) => {
    const index = e.target.dataset.index;

    if (board[index] || !isGameActive) return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === '😀' ? '😍' : '😀';
};

// 重置游戏
const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = '😀';
};

// 绑定事件
cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);


