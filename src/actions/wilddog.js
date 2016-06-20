import Wilddog from 'wilddog'

// 利用野狗传递数据
var ref = new Wilddog('https://eolgallery.wilddogio.com/');

// ref.push({
//   'fileName': '33s.jpg',
//   'title': 'Heaven of time',
//   'desc': 'Here he comes Here comes Speed Racer.'
// });

var cc = [];
ref.on('value', function(snapshot,error) {
    var newPost = snapshot.val();
    console.log(newPost)
});

// ref.set([
//   {
//     "fileName": "1.jpg",
//     "title": "李明阳",
//     "desc": "Here he comes Here comes Speed Racer."
//   },
//   {
//     "fileName": "2.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer."
//   },
//   {
//     "fileName": "3.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer."
//   },
//   {
//     "fileName": "4.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer. "
//   },
//   {
//     "fileName": "5.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer. "
//   },
//   {
//     "fileName": "6.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer. "
//   },
//   {
//     "fileName": "7.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer. "
//   },
//   {
//     "fileName": "8.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer. "
//   },
//   {
//     "fileName": "9.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer. "
//   },
//   {
//     "fileName": "10.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer. "
//   },
//   {
//     "fileName": "11.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer. "
//   },
//   {
//     "fileName": "12.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer.  "
//   },
//   {
//     "fileName": "13.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer.  "
//   },
//   {
//     "fileName": "14.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer.  "
//   },
//   {
//     "fileName": "15.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer.  "
//   },
//   {
//     "fileName": "16.jpg",
//     "title": "Heaven of time",
//     "desc": "Here he comes Here comes Speed Racer.  "
//   }
// ]
// );