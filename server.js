const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://picsum.photos/id/593/128/128',
            'name': '坪井_はるか',
            'birthday': '990827',
            'gender': '女性',
            'job': '社会人'
        },
        {
            'id': 2,
            'image': 'https://picsum.photos/id/237/128/128',
            'name': 'ロク',
            'birthday': '100512',
            'gender': '男性',
            'job': '警備員'
        },
        {
            'id': 3,
            'image': 'https://picsum.photos/id/669/128/128',
            'name': 'えみ',
            'birthday': '001117',
            'gender': '女性',
            'job': '大学生'
        }
    ]);
});

app.listen(port,() =>console.log(`Listening on port ${port}`));