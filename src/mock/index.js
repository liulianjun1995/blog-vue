import Mock from 'mockjs'

let random = Mock.Random;

Mock.mock(/\/api\/user/, 'get', function (option) {
  const res = /\/api\/user\/(\d)+/.exec(option.url);
  return {
    status: 200,
    message: 'ok',
    data: {
      id: res[1],
      name: random.name(),
      email: random.email(),
      address: random.county(true),
      date: random.date('yyyy-MM-dd')
    },
  }
});

Mock.mock('/api/articles', 'get', function () {
  let rad = random.integer(5, 10);
  let list = [];
  for (var i = 1; i <= rad; i++) {
    list.push({
      id: i,
      cover: random.image('800x600'),
      title: random.ctitle(5, 15),
      abstract: random.csentence(20, 50),
      tag: random.cword(2, 4),
      views: random.integer(10, 100),
      comments: random.integer(10, 100),
      praises: random.integer(10, 100),
      create_time: random.date('yyyy-MM-dd')
    })
  }
  return {
    status: 200,
    message: 'ok',
    data: list
  }
});

Mock.mock('/api/articles/recommend', 'get', function () {
  let list = [];
  for (var i = 1; i < 2; i++) {
    list.push({
      id: i,
      cover: random.image('800x600'),
      title: random.ctitle(5, 15),
      abstract: random.csentence(20, 50),
      tag: random.cword(2, 4),
      views: random.integer(10, 100),
      comments: random.integer(10, 100),
      praises: random.integer(10, 100),
      create_time: random.date('yyyy-MM-dd')
    })
  }
  return {
    status: 200,
    message: 'ok',
    data: list
  }
});