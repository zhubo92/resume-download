const express = require('express');
const path = require('path');
const cors = require('cors');
const port = require('./server/config').port;
const app = express();

// 跨域
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './', 'index.html'));
});

// 查看上传后的文件
app.use('/upload', express.static(path.join(__dirname, './file')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 上传文件
app.use('/api/upload', require('./server/uploader'));

app.listen(port, () => {
    console.log(`server listen on ${port}`);
    console.log(`http://localhost:${port}/`);
});

